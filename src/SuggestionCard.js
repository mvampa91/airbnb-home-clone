import React from 'react'
import './SuggestionCard.css'
const SuggestionCard = ({ title, image, price}) => {
    return (
        <div className="suggestionCard">
            <div className="suggestionCard__left">
                <img src={image} alt="pic"/>
            </div>
            <div className="suggestionCard__right">
                <h4>
                    {title}
                </h4>
                <p>
                    <strong>{price}</strong> a notte in media
                </p>
            </div>
        </div>
    )
}

export default SuggestionCard
