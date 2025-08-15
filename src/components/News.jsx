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
    //     },
    //     {
    //         "source": {
    //             "id": "axios",
    //             "name": "Axios"
    //         },
    //         "author": "Barak Ravid, Dave Lawler, Marc Caputo",
    //         "title": "Zelensky scrambles to avert disaster as Trump meets Putin - Axios",
    //         "description": "Recent days have been whiplash-inducing for Ukrainian officials.",
    //         "url": "https://www.axios.com/2025/08/13/zelensky-trump-putin-summit-ukraine",
    //         "urlToImage": "https://images.axios.com/ByT6NzJD_5g6B89-gVVpQdCEoyM=/1366x768/smart/2025/05/21/165830-1747846710066.jpg",
    //         "publishedAt": "2025-08-13T09:01:47Z",
    //         "content": "The big picture: Trump is expected to hold a virtual meeting Wednesday with Zelensky and a group of European leaders, two sources with knowledge of the plans tell Axios.\r\n\u003Cul\u003E\u003Cli\u003EZelensky has been do… [+3043 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ZDNet"
    //         },
    //         "author": "Lance Whitney",
    //         "title": "Your Windows PC has a secretly us&eful backup tool - here's how to access it - ZDNET",
    //         "description": "Looking for a traditional yet flexible program to back up your personal files? Windows has a built-in tool that you can take advantage of.",
    //         "url": "https://www.zdnet.com/article/your-windows-pc-has-a-secretly-us&eful-backup-tool-heres-how-to-access-it/",
    //         "urlToImage": "https://www.zdnet.com/a/img/resize/f29c1127b7aa0b3bf995d0f7b0227b87baf6e2c9/2025/05/08/786e5565-c138-4df9-a5ff-8aafc2d7eaaf/lenovo-yoga-9-2-in-1-aura-edition-hero.png?auto=webp&fit=crop&height=675&width=1200",
    //         "publishedAt": "2025-08-13T08:00:00Z",
    //         "content": "Lance Whitney / Elyse Betters Picaro / ZDNET\r\nZDNET's key takeaways\r\n\u003Cul\u003E\u003Cli\u003EWindows has a hidden backup tool in Windows 10 and 11.\u003C/li\u003E\u003Cli\u003EIt can save files to discs, drives, or network locations.\u003C/… [+3371 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Atlanta Journal Constitution"
    //         },
    //         "author": "Alexis Stevens, David Aaro",
    //         "title": "500 rounds fired in CDC shooting, guns stolen from father, GBI says - AJC.com",
    //         "description": "Despite the barrage of bullets, no one else was shot, according to investigators.",
    //         "url": "https://www.ajc.com/news/2025/08/500-rounds-fired-in-cdc-shooting-after-cobb-man-steals-fathers-guns-gbi-says/",
    //         "urlToImage": "https://www.ajc.com/resizer/v2/D3G24R2JBBFY5C42HQ6V6ZDH3Q.JPG?auth=24d3ebe6fc9292c91b1fe58828e802c250eccc7fb2ee926119dc6ac6ca2dd6a1&width=1200&height=630&smart=true",
    //         "publishedAt": "2025-08-13T05:05:05Z",
    //         "content": "Our hearts and prayers go to the family, friends and colleagues of DeKalb County police Officer David Rose, who was killed in the line of duty during this incident, GBI Director Chris Hosey said. He … [+4163 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Billboard"
    //         },
    //         "author": "Paul Grein",
    //         "title": "The Life of a Prolific Pop Star: ‘Showgirl’ Will Be Taylor Swift’s Ninth Full-Length Album of the 2020s - Billboard",
    //         "description": "Taylor Swift's jus&t-announced 'The Life of a Showgirl' will be her ninth full-length album of the 2020s. And that doesn’t even count live albums.",
    //         "url": "http://www.billboard.com/mus&ic/pop/taylor-swift-life-of-a-show-girl-9th-album-2020s-1236041646/",
    //         "urlToImage": "https://www.billboard.com/wp-content/uploads/2025/08/taylor-swift-eras-london-2024billboard-1800.jpg?w=1024",
    //         "publishedAt": "2025-08-13T04:59:35Z",
    //         "content": "There are many reasons for Taylor Swift’s extraordinary success: talent, resilience, courage and, not least, a work ethic that is second to none. The country-turned-pop superstar is tireless and extr… [+2202 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Joseph Staszewski",
    //         "title": "Vince McMahon defends bringing Hulk Hogan back to WWE after ‘unforgivable’ comments - New York Post",
    //         "description": "Vince McMahon defended his decision to bring Hulk Hogan back to WWE in 2018.",
    //         "url": "https://nypost.com/2025/08/13/sports/vince-mcmahon-defends-bringing-hulk-hogan-back-to-wwe/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/08/newspress-collage-eaf4o4ilb-1755056821483.jpg?quality=75&strip=all&1755042544&w=1024",
    //         "publishedAt": "2025-08-13T04:57:00Z",
    //         "content": "Vince McMahon defended his decision to bring Hulk Hogan back to WWE in 2018, three years after the company severed ties with him once it was revealed that the pro wrestling icon had us&ed a racial slu… [+3338 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NPR"
    //         },
    //         "author": "The Associated Press",
    //         "title": "Danielle Spencer, who played little sister Dee on 'What's Happening!!,' dies at 60 - NPR",
    //         "description": "A family spokesperson said Spencer died Monday after battling cancer for several years. As Dee, she was a deadpan, wisecracking sister on What's Happening!! Spencer later became a veterinarian.",
    //         "url": "https://www.npr.org/2025/08/12/nx-s1-5500593/danielle-spencer-who-played-little-sister-dee-on-whats-happening-dies-at-60",
    //         "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3000x1688+0+197/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fdd%2F6a%2F69b9dc7845e5bcaafbb5c40df666%2Fdanielle-spencer-ap.jpg",
    //         "publishedAt": "2025-08-13T03:54:40Z",
    //         "content": "Danielle Spencer, who played the wisecracking and tattling little sister Dee Thomas on the 1970s sitcom What's Happening!! has died at 60.\r\nSpencer, who became a veterinarian later in life, died Mond… [+2815 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": null,
    //         "title": "Mexico sends 26 cartel members to U.S. in deal with Trump administration - CBS News",
    //         "description": "The transfers are a milestone for the Trump administration, which has made dismantling dangerous& drug cartels a key Jus&tice Department priority.",
    //         "url": "https://www.cbsnews.com/news/mexico-sends-26-cartel-members-deal-trump-administration/",
    //         "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2025/08/13/f118641c-24b4-400c-b985-2d239e462167/thumbnail/1200x630/f19ab8496c7b6d8ba108d8869c75ae0c/ap25225012956647.jpg",
    //         "publishedAt": "2025-08-13T03:44:06Z",
    //         "content": "Mexico sent 26 high-ranking cartel figures to the United States Tuesday in the latest major deal with the Trump administration as American authorities ratchet up pressure on criminal networks smuggli… [+4950 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Zac Hall",
    //         "title": "Every rumored iPhone 17, iPhone 17 Air, and iPhone 17 Pro color - 9to5Mac",
    //         "description": "Apple’s next iPhone lineup is getting closer to launch, and color may be one of the most exciting changes this...",
    //         "url": "https://9to5mac.com/2025/08/12/iphone-17-color-options-2025/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/06/iphone-17-pro-max-vs-pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2025-08-13T03:21:00Z",
    //         "content": "Apples next iPhone lineup is getting closer to launch, and color may be one of the most exciting changes this year. Leaks suggest the iPhone 17 series will not only bring back some fan favorites but … [+1790 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "AI start-up Perplexity makes surprise $34.5bn bid for Google Chrome - BBC",
    //         "description": "One technology investor called the $34.5bn offer a \"stunt\" that is much lower than Chrome's true value.",
    //         "url": "https://www.bbc.com/news/articles/c3dpr0kkyz4o",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/55fd/live/409c55e0-77ec-11f0-b5e4-b7de86a3c192.jpg",
    //         "publishedAt": "2025-08-13T03:06:51Z",
    //         "content": "Artificial intelligence start-up Perplexity AI has made a surprise $34.5bn (£25.6bn) takeover bid for the world's most popular web browser, Google Chrome.\r\nThe three-year-old firm, whose backers incl… [+3235 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Pittsburgh Post-Gazette"
    //         },
    //         "author": "Noah Hiles",
    //         "title": "Pirates lose to Brewers in blowout fashion - Pittsburgh Post-Gazette",
    //         "description": "False",
    //         "url": "https://www.post-gazette.com/sports/pirates/2025/08/12/pittsburgh-pirates-paul-skenes-milwaukee-brewers/stories/202508050143",
    //         "urlToImage": "https://f50d772ec1e2a4347264-964b3324d77f313a724faa237152e95f.ssl.cf2.rackcdn.com/stories/202508050143/1140x_a10-7_cTC/Pirates-Brewers-Baseball-1-25_1755050912.jpg",
    //         "publishedAt": "2025-08-13T02:30:03Z",
    //         "content": "MENU"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Eonline.com"
    //         },
    //         "author": null,
    //         "title": "Reba McEntire Shares Message on Brandon Blackstock's \"Struggle\" - yahoo.com",
    //         "description": "Less than a week after Brandon Blackstock's death at age 48, Reba McEntire reflected on her stepson's \"struggle\" in the years leading up to his passing due to his battle with cancer.",
    //         "url": "https://www.eonline.com/news/1421086/reba-mcentire-on-brandon-blackstocks-struggle-amid-death",
    //         "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20250812/6389ef56-2548-4819-9ccd-d5d4cdac79bb_1755050708.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    //         "publishedAt": "2025-08-13T02:18:00Z",
    //         "content": "Likewise, Reba and Narvel's son Shelby Blackstock detailed the special bond he had with his half-brother in his own touching message. \r\n\"He taught me so much, leaving behind countless cherished memor… [+704 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "newsweek",
    //             "name": "Newsweek"
    //         },
    //         "author": "Amanda Castro",
    //         "title": "Perseid Meteor Shower: Peak Time, Locations to See Shower Tonight - Newsweek",
    //         "description": "Perseid meteor shower peaks Augus&t 12–13 with up to 100 meteors/hour; watch live or catch fireballs before dawn.",
    //         "url": "https://www.newsweek.com/meteor-shower-live-tracker-updates-perseids-augus&t-tonight-2112534",
    //         "urlToImage": "https://d.newsweek.com/en/full/2701250/perseids-meteor-shower.jpg",
    //         "publishedAt": "2025-08-13T01:31:37Z",
    //         "content": "One of the most anticipated celestial events of the year is set to dazzle skywatchers as the Perseid meteor shower reaches its peak on the night of Augus&t 12 into the early hours of Augus&t 13. Known … [+16336 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": "Cristian  Benavides",
    //         "title": "\"Flesh-eating\" bacteria risk increasing as ocean temperatures rise - CBS News",
    //         "description": "Vibrio vulnificus&, a so-called \"flesh-eating\" bacteria, lurks in warm ocean waters like those along Florida's Gulf Coast.",
    //         "url": "https://www.cbsnews.com/news/flesh-eating-bacteria-vibrio-vulnificus&-florida/",
    //         "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2025/08/12/dcea6470-42fb-4156-b29c-d4ba297dc88a/thumbnail/1200x630/8ae20cb35c4e05492bfdf6755419d0a8/f5-benavides-florida-bacteria-enp-081225-v3-1-copy-01-frame-265.jpg",
    //         "publishedAt": "2025-08-13T00:20:02Z",
    //         "content": "Lifelong boat captain George Billiris says he's lucky to be alive after Vibrio vulnificus&, the so-called \"flesh-eating\" bacteria that lurks in warm coastal waters like those along Florida's Gulf Coas… [+1914 chars]"
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
        console.log("cdm");
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
        // console.log("cdm");
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
                            <Newsitem title={element.title?.slice(0, 45) || ""} description={element.description?.slice(0, 88) || ""} imageurl={element.urlToImage} newsUrl={element.url} />
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