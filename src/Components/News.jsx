import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import Categories from './Categories'

const countryCode = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    bg: "Bulgaria",
    br: "Brazil",
    ca: "Canada",
    ch: "Switzerland",
    cn: "China",
    co: "Colombia",
    cz: "Czech Republic",
    de: "Germany",
    eg: "Egypt",
    fr: "France",
    gb: "United Kingdom",
    gr: "Greece",
    hk: "Hong Kong",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    lt: "Lithuania",
    lv: "Latvia",
    ma: "Morocco",
    mx: "Mexico",
    my: "Malaysia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    nz: "New Zealand",
    ph: "Philippines",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    sa: "Saudi Arabia",
    se: "Sweden",
    sg: "Singapore",
    si: "Slovenia",
    sk: "Slovakia",
    th: "Thailand",
    tr: "Turkey",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
    ve: "Venezuela",
    za: "South Africa"
}


const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

const News = () => {
    const [articles, setArticles] = useState([])
    const [country, setCountry] = useState('in')
    const [category, setCategory] = useState('general')

    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_APP_API_KEY}`
    useEffect(() => {
        try {
            axios.get(URL).then((response) => {
                setArticles(response.data.articles)
                console.log(response.data.articles);
            })
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }, [category, country])
    return (
        <div className='container my-5'>
            <div className="category-group">
                <div className="btn-group d-flex gap-3 text-center mx-auto mb-3" role="group" aria-label="Basic example">
                    {categories.map((category, index) => <Categories key={index} categoryName={category} onClick={() => setCategory(category)} />)}
                </div>
                <div className="dropdown me-auto">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {countryCode[country]}
                    </button>
                    <ul className="dropdown-menu" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {Object.keys(countryCode).map((key) => <li><a className="dropdown-item" href="#" onClick={() => setCountry(key)}>{countryCode[key]}</a></li>)}
                    </ul>
                </div>
            </div>
            <div className="article mt-5">
                <div className="main-text mb-3">
                    <h1>Top Headlines from {countryCode[country]} - {category}</h1>
                </div>
                <div className="articles d-flex flex-wrap justify-content-between align-items-center gap-4">
                    {articles && articles.map((article, index) => article.title !== '[Removed]' && <NewsCard key={index} author={article.author} description={article.description} title={article.title} url={article.url} urlToImage={article.urlToImage} />)}
                </div>
            </div>
        </div>
    )
}

export default News