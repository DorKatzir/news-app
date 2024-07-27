
import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import './News.css'

export default function News() {
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

                    <div className="headline">
                        <img src={ techImg } alt="Headline Image" />
                        <h2 className="headline-title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, provident.
                        </h2>
                    </div>

                    <div className="news-grid">

                        <div className="news-grid-item">
                            <img src={ worldImg } alt="News Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ sportsImg } alt="News Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ scienceImg } alt="News Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ healthImg } alt="News Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ entertainmentImg } alt="News Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                        <div className="news-grid-item">
                            <img src={ nationImg } alt="News Image" />
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>

                    </div>

                </div>


            </div>

            <footer>
                <p className='copyright'>
                    <span>News App</span>
                    <span> &copy; All Rights Reserved. By Dror Katzir</span>
                </p>
            </footer>

        </div>
    )
}
