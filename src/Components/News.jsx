
import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import './News.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const NEWS_KEY = import.meta.env.VITE_NEWS_API_KEY

export default function News() {

    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])

    useEffect(()=>{

        const today = (new Date()).toDateString()
        const localKey = `NEWS-${today}`

        if (localStorage.getItem(localKey)){
            const data = JSON.parse(localStorage.getItem(localKey))
            //setHeadline(data)
            setHeadline(data[0])
            console.log(data)
            console.log('Fetched from Local storage')
            return
        }

        localStorage.clear()


        const fetchNews = async ()=>{
            const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=2&apikey=${NEWS_KEY}`
            const response = await axios.get(url)
            const fetchedNews = response.data.articles
            console.log(fetchedNews)
            
            localStorage.setItem(localKey, JSON.stringify(fetchedNews))
            // setHeadline(fetchedNews)
            console.log('Fetched from API today')
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

                    { headline && 
                        <div className="headline">
                            <img src={ headline.image } alt={ headline.title } />
                            <h2 className="headline-title">
                                { headline.title }
                            </h2>
                        </div>  
                    }

                    <div className="news-grid">

                        <div className="news-grid-item">
                            <img src={ worldImg } alt="World Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ sportsImg } alt="Sports Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ scienceImg } alt="Science Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ healthImg } alt="Health Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ entertainmentImg } alt="Entertaintment Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ nationImg } alt="Nation Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

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
