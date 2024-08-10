import demoImg from '../assets/images/demo.jpg'
import './NewsModal.css'

export default function NewsModal({show, article, onClose}) {
    if (!show ) {
        return null
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">

                <span className="close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </span>

                <img src={article.image} alt={article.title} className="modal-image" />

                <h2 className="modal-title">
                    {article.title}
                </h2>

                <p className="modal-source">
                    Source: { article.source.name }
                </p>

                <p className="modal-date">
                    { article.publishedAt }
                </p>

                <p className="modal-content-text">
                    { article.content }
                </p>

                <a href={ article.url } target='_blank' className="read-more-link">
                    Read More
                </a>

            </div>
        </div>
    )
}
