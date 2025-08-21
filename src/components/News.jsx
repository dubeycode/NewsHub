import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    // Free api has a limited hit so we use array method to devlopment time .
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Pia Singh",
    //         "title": "Stock futures rise as S&P 500 and Nasdaq get set to build on record highs: Live updates - CNBC",
    //         "description": "The major U.S. indexes are coming off of a strong trading session, which saw the S&P 500 and tech-heavy Nasdaq Composite notch fresh record highs.",
    //         "url": "https://www.cnbc.com/2025/08/12/stock-market-today-live-updates.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/108184859-1755018332422-Traders-TF-Photo-20250812-ACJ-PRESS-2.jpg?v=1755018447&w=1920&h=1080",
    //         "publishedAt": "2025-08-13T09:55:00Z",
    //         "content": "Futures tied to the S&amp;P 500 and Nasdaq 100 moved higher early Wednesday as investors come off a record-setting session that saw encouraging news on the inflation front.\r\nS&amp;P futures climbed 0… [+2032 chars]"
    //     }

    // ]
    static defaultProps = {
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        // console.log("hello i am constructor from news app");
        this.state = {
            //    articles: this.articles,
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        // let url = "https://newsapi.org/v2/top-headlines?country=us&category=us&&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=1";
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        // console.log(parseData)
        this.setState({ articles: parseData.articles , totalResult:parseData.totalResults,loading:false})
    }
    
    async componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category) {
    console.log("Category changed:", this.props.category);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true, page: 1 }); // reset page jab category change ho

    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
}
    handlePrevclick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        // console.log(parseData)
        this.setState({
            page:this.state.page -1,
            articles: parseData.articles,
            loading:false
           
        })
    }

    handleNextclick= async()=>{
        if(!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page:this.state.page -1,
                articles: parseData.articles,
                loading:false
            })
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=306db2e04ab84c2cb2d17ea5008769b4&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json()
            console.log(parseData)
            this.setState({
                page:this.state.page +1,
                articles: parseData.articles,
                totalResults: parseData.totalResults
            })
    }
    }
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