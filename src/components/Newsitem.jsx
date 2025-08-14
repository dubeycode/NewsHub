import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let  {title ,description,imageurl,newsUrl}=this.props;
    return (
      <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
        <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/55fd/live/409c55e0-77ec-11f0-b5e4-b7de86a3c192.jpg":imageurl} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blanck' className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem