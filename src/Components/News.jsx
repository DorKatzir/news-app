import { useEffect, useState } from 'react'

import noImg from '../assets/images/no-img.png'

import './News.css'
import axios from 'axios'
import NewsModal from './NewsModal'


const NEWS_KEY = import.meta.env.VITE_NEWS_API_KEY

const categories = [
    'general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation'
]



export default function News() {

    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('general')
    const [showModal, setShowModal] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(()=>{

        const today = (new Date()).toDateString()
        const localKey = `${selectedCategory}-${today}`

        
        // Getting data from Local Storage
        if (localStorage.getItem(localKey) || localStorage.getItem(localKey) !== null){
            
            const data = JSON.parse(localStorage.getItem(localKey))
            
            setHeadline(data[0])
            setNews(data.slice(1, 7))
            
            console.log(selectedCategory + ' - Fetched from Local storage')
            
            return
        }
        
        
        if (localStorage.getItem('day') !== today) {
            localStorage.clear()
        }


        // Getting data from API
        const fetchNews = async ()=>{

            if ( ! localStorage.getItem('day') ) {
                localStorage.setItem('day', today)
            }

            const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&max=7&apikey=${NEWS_KEY}`
            const response = await axios.get(url)
            const fetchedNews = response.data.articles
            // console.log(fetchedNews)
            
            localStorage.setItem(localKey, JSON.stringify(fetchedNews))
            
            setHeadline(fetchedNews[0])
            setNews(fetchedNews.slice(1, 7))
        
            console.log(selectedCategory + ' - Fetched from API')
        }

        fetchNews()

    },[selectedCategory])

    const handleCategoryClick = ( e, category ) => {
        e.preventDefault()
        setSelectedCategory( category )
    }

    const handleArticleClick = (article) => {
        setSelectedArticle(article)
        setShowModal(true)
    }

    return (
        <div className="news-app">

            <div className="news-header">
                <h1 className="logo">
                    News App
                </h1>

                <nav className="navbar">
                    
                    <div className="categories">
                        {
                            categories.map((category) => 
                                <a  key={category} 
                                    onClick={ (e)=> handleCategoryClick(e, category)} 
                                    className="nav-link"
                                >
                                { category }
                                </a>   
                            )
                        }
                    </div>

                </nav>

            </div>

            <div className="news-content">

                <div className="news-section">

                    { 
                        headline && 
                            <div className="headline" onClick={() => handleArticleClick(headline)}>
                                { 
                                    headline.image 
                                            ? <img src={ headline.image } alt={ headline.title } />
                                            : <img src={ noImg } />
                                }      
                                <h2 className="headline-title">
                                    { headline.title }
                                </h2>
                            </div>  
                    }

                    <div className="news-grid">
                        {
                            news.map((article, index) => 
                                <div className="news-grid-item" key={ index } onClick={() => handleArticleClick(article)}>
                                    {
                                        article.image 
                                                ? <img src={ article.image } alt={ article.title } /> 
                                                : <img src={ noImg } />
                                    }
                                    <h3>{ article.title }</h3>
                                </div>   
                            ) 
                        }
                    </div>

                </div>

                <NewsModal show={showModal} article={selectedArticle} onClose={() => setShowModal(false)} />
            </div>

            <footer>
                <p className='copyright'>
                    <span>News App</span>
                </p>
                <p className='copyright'>
                    &copy; All Rights Reserved. By Dror Katzir
                </p>
            </footer>

        </div>
    )
}
