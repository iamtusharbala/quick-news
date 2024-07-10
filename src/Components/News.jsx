import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import Categories from './Categories'
import Spinner from './Spinner'

const countryCodes = {
    ae: 'United Arab Emirates',
    ar: 'Argentina',
    at: 'Austria',
    au: 'Australia',
    be: 'Belgium',
    bg: 'Bulgaria',
    br: 'Brazil',
    ca: 'Canada',
    ch: 'Switzerland',
    cn: 'China',
    co: 'Colombia',
    cz: 'Czech Republic',
    de: 'Germany',
    eg: 'Egypt',
    fr: 'France',
    gb: 'United Kingdom',
    gr: 'Greece',
    hk: 'Hong Kong',
    hu: 'Hungary',
    id: 'Indonesia',
    ie: 'Ireland',
    il: 'Israel',
    in: 'India',
    it: 'Italy',
    jp: 'Japan',
    kr: 'South Korea',
    lt: 'Lithuania',
    lv: 'Latvia',
    ma: 'Morocco',
    mx: 'Mexico',
    my: 'Malaysia',
    ng: 'Nigeria',
    nl: 'Netherlands',
    no: 'Norway',
    nz: 'New Zealand',
    ph: 'Philippines',
    pl: 'Poland',
    pt: 'Portugal',
    ro: 'Romania',
    rs: 'Serbia',
    ru: 'Russia',
    sa: 'Saudi Arabia',
    se: 'Sweden',
    sg: 'Singapore',
    si: 'Slovenia',
    sk: 'Slovakia',
    th: 'Thailand',
    tr: 'Turkey',
    tw: 'Taiwan',
    ua: 'Ukraine',
    us: 'United States',
    ve: 'Venezuela',
    za: 'South Africa',
}

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']

const News = () => {
    const [news, setNews] = useState([])
    const [country, setCountry] = useState('in')
    const [category, setCategory] = useState('general')
    const [selectedCategory, setSelectedCategory] = useState('general')

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_APP_API_KEY}`

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(url);
            setNews(response.data.articles);
        };
        fetchNews();
    }, [category, country]);

    return (
        <div className="container my-5">
            <div className="category-group">
                <div className="d-flex flex-wrap justify-content-evenly align-items-center mb-3" role="group" aria-label="Basic example">
                    {categories.map((categoryName, index) => (
                        <Categories
                            key={index}
                            categoryName={categoryName}
                            onClick={() => {
                                setCategory(categoryName)
                                setSelectedCategory(categoryName)
                            }}
                            isSelected={categoryName === selectedCategory}
                        />
                    ))}
                </div>
                <div className="dropdown d-flex justify-content-end md-justify-content-center mt-5">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {countryCodes[country]}
                    </button>
                    <ul className="dropdown-menu" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {Object.keys(countryCodes).map((countryCode, index) => (
                            <li key={index}>
                                <a className="dropdown-item" onClick={() => setCountry(countryCode)}>
                                    {countryCodes[countryCode]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="article mt-5">
                <div className="main-text mb-3">
                    {news && <h1 className="text-center">
                        Top Headlines from {countryCodes[country]} - {category[0].toUpperCase() + category.slice(1)}
                    </h1>}
                </div>
                <div className="articles d-flex justify-content-center align-items-center flex-wrap gap-4 mt-4">
                    {news ? <Spinner /> : news.map((article, index) => (
                        <NewsCard
                            key={index}
                            author={article.author}
                            description={article.description}
                            title={article.title}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            publishedAt={article.publishedAt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News
