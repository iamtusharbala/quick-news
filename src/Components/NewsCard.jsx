import React from 'react'
import defaultImage from '../assets/news-img.png'

const NewsCard = ({ author, description, title, url, urlToImage, publishedAt }) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
        <div className="card" style={{ width: '18rem', height: '38rem', overflow: 'hidden' }}>
            <img src={urlToImage || defaultImage} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description && description.toString().slice(0, 120) + '...'}</p>
                {author && <footer className="blockquote-footer mt-3">{author}</footer>}
                <a href={url} target='_blank' className="btn btn-primary">Go To Link</a>
            </div>
            <div className="card-footer">
                <p className="card-text"><small className="text-body-secondary">Published at {publishedAt && months[Number(publishedAt.slice(5, 7)) - 1] + ' ' + publishedAt.slice(8, 10) + ', ' + publishedAt.slice(0, 4)} at {publishedAt.slice(11, 16)}</small></p>
            </div>
        </div >
    )
}

export default NewsCard