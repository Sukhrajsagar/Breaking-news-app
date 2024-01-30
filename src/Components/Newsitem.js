import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props; 
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/10/05/600x338/office_1696489296084.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} :- {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default Newsitem