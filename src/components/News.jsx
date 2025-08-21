import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
   
    static defaultProps = {
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        // console.log("hello i am constructor from news app");
        this.state = {
            //    articles: this.articles,
            articles: [],
            loading: false,
            page: 1
        }
       
    }



    // async componentDidMount() {
    
    // handlePrevclick= async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parseData = await data.json()
    //     // console.log(parseData)
    //     this.setState({
    //         page:this.state.page -1,
    //         articles: parseData.articles,
    //         loading:false
           
    //     })
    // }

  
updateNews = async (page) => {
  this.props.setProgress(10);

  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=${page}&pageSize=${this.props.pageSize}`;

  this.setState({ loading: true });

  this.props.setProgress(40);
  let data = await fetch(url);
  let parseData = await data.json();

  this.props.setProgress(70);
  this.setState({
    page: page,
    articles: parseData.articles,
    totalResults: parseData.totalResults,
    loading: false,
  });

  document.title = `${this.props.category} - Page ${page} - NewsHub`;
  this.props.setProgress(100);
};


async componentDidMount() {
  this.updateNews(1);
}

async componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category) {
    this.updateNews(1); // reset when category changes
  }
}

handlePrevclick = () => {
  this.updateNews(this.state.page - 1);
};

handleNextclick = () => {
  this.updateNews(this.state.page + 1);
};




    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{margin: '35px 0px'}}> News Hub Top Headlines</h2>
               {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title?.slice(0, 45) || ""} 
                            description={element.description?.slice(0, 88) || ""}
                             imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                             source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevclick}> &larr; Previous</button>
                    <button type='button' className='btn btn-dark'  onClick={this.handleNextclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} > Next &rarr; </button>
                </div>

            </div>
        )
    }
}

export default News