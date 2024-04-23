import { HashLink as Link } from 'react-router-hash-link'
import './Card.scss'

export function Card({eClass, image_url, image_description, title, description, destination, destination_url}) {
    return (
        <div className={`card ${eClass}`}>
            <div className="card__image">
                <img src={image_url} alt={image_description} />
            </div>
            <div className="card__info">
                <h3 className='title'>{title}</h3>
                {description ? <p>{description}</p> : null}
                {destination && destination_url ? <Link smooth to={destination_url}>{destination}</Link> : null}
            </div>
        </div>
    )
}