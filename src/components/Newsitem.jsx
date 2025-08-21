import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageurl, newsUrl, author, date , source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/55fd/live/409c55e0-77ec-11f0-b5e4-b7de86a3c192.jpg":imageurl} className="card-img-top" alt="..."></img> */}
          <img src={imageurl && imageurl.startsWith("http") ? imageurl : "https://ichef.bbci.co.uk/news/1024/branded_news/55fd/live/409c55e0-77ec-11f0-b5e4-b7de86a3c192.jpg"} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span></h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a rel='noreferrer' href={newsUrl} target='_blanck' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem