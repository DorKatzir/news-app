
// import techImg from '../assets/images/tech.jpg'
//import worldImg from '../assets/images/world.jpg'
//import sportsImg from '../assets/images/sports.jpg'
//import scienceImg from '../assets/images/science.jpg'
//import healthImg from '../assets/images/health.jpg'
//import entertainmentImg from '../assets/images/entertainment.jpg'
//import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'

import './News.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const NEWS_KEY = import.meta.env.VITE_NEWS_API_KEY

const categories = [
    'general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation'
]



export default function News() {

    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('general')

    useEffect(()=>{

        const category = 'general'

        const today = (new Date()).toDateString()
        const localKey = `${category}-${today}`

        
        // Getting data from Local Storage
        if (localStorage.getItem(localKey) || localStorage.getItem(localKey) !== null){
            
            const data = JSON.parse(localStorage.getItem(localKey))
            
            setHeadline(data[0])
            setNews(data.slice(1, 7))
            
            console.log('Fetched from Local storage')
            
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

            const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=7&apikey=${NEWS_KEY}`
            const response = await axios.get(url)
            const fetchedNews = response.data.articles
            // console.log(fetchedNews)
            
            localStorage.setItem(localKey, JSON.stringify(fetchedNews))
            
            setHeadline(fetchedNews[0])
            setNews(fetchedNews.slice(1, 7))
        
            console.log('Fetched from API')
        }

        fetchNews()

    },[])

    return (
        <div className="news-app">

            <div className="news-header">
                <h1 className="logo">
                    News App
                </h1>
            </div>

            <div className="news-content">

                <nav className="navbar">
                    <h2 className="nav-heading">
                        Categories
                    </h2>
                    <div className="categories">
                        <a href="#" className="nav-link">General</a>
                        <a href="#" className="nav-link">World</a>
                        <a href="#" className="nav-link">Business</a>
                        <a href="#" className="nav-link">Technology</a>
                        <a href="#" className="nav-link">Entertainment</a>
                        <a href="#" className="nav-link">Sports</a>
                        <a href="#" className="nav-link">Science</a>
                        <a href="#" className="nav-link">Health</a>
                        <a href="#" className="nav-link">Nation</a>
                    </div>
                </nav>

                <div className="news-section">

                    { 
                        headline && 
                            <div className="headline">
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
                                <div className="news-grid-item" key={ index }>
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
