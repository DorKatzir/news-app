import demoImg from '../assets/images/demo.jpg'
import './NewsModal.css'

export default function NewsModal({show, article, onclose}) {
    if (!show ) {
        return null
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <span className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                </span>

                <img src={ demoImg } alt="Modal Image" className="modal-image" />

                <h2 className="modal-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, mollitia.
                </h2>

                <p className="modal-source">
                    Source: The Guardian
                </p>

                <p className="modal-date">
                    Aug 10, 2024, 03:15 PM
                </p>

                <p className="modal-content-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi dolorem quis id? Consequatur aliquid aspernatur provident explicabo voluptatibus autem accusamus incidunt suscipit nostrum dicta facilis quis est iusto accusantium sint, aut dolor reiciendis veritatis!
                </p>

                <a href="#" className="read-more-link">
                    Read More
                </a>

            </div>
        </div>
    )
}
