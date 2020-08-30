import React from 'react'
import './FooterSection.css'
const FooterSection = ({ title, items }) => {
    return (
        <div className="footerSection">
            <h5>{title}</h5>
            {items.map((m, i) => {
                return (
                    <p key={i}>{m}</p>
                );
            })}
        </div>
    )
}

export default FooterSection
