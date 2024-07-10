import React from 'react'
import defaultImage from '../assets/news-img.png'

const NewsCard = ({ author, description, title, url, urlToImage }) => {
    return (
        <div className="card" style={{ width: '18rem', height: '38rem' }}>
            <img src={urlToImage || defaultImage} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <footer className="blockquote-footer">{author}</footer>
                <a href={url} target='_blank' className="btn btn-primary">Go To Link</a>
            </div>
        </div >
    )
}

export default NewsCard