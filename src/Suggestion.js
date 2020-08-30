import React from 'react'
import './Suggestion.css'
import SuggestionCard from './SuggestionCard'

const Suggestion = () => {
    return (
        <div className="suggestion">
            <div className="suggestion__top">
                <h1>
                Il nostro scopo è quello di creare un mondo a cui tutti sentano di appartenere, e per questo supportiamo la causa di #BlackLivesMatter.
                </h1>
                <p>
                Non importa chi sei, da dove vieni, chi ami o chi veneri: nessuno merita di essere vittima di razzismo. La discriminazione non è tollerata nella nostra community. Ecco perché quando accetti di prenotare od ospitare su Airbnb, ti impegni a non tollerarla tu stesso.
                </p>
            </div>
            <div className="suggestion__bottom">
                <h2>
                La tua prossima vacanza

                </h2>
                <div className="suggestion__bottom-card">
                <SuggestionCard title="San Gimignano" price="110€" image="https://a0.muscache.com/im/pictures/93d5208f-80c8-4933-85a5-342b8eab74ac.jpg?aki_policy=large"/>

                <SuggestionCard title="Riva del Garda" price="110€" image="https://a0.muscache.com/im/pictures/7f6519cf-ae41-4f53-b5b8-7d5f57272915.jpg?aki_policy=large"/>
                <SuggestionCard title="Vieste" price="110€" image="https://a0.muscache.com/im/pictures/aec36912-c412-49db-aef4-01bf9d42d2d4.jpg?aki_policy=large"/>
                <SuggestionCard title="Monterosso al Mare" price="110€" image="https://a0.muscache.com/im/pictures/7de95681-3fd2-4e2a-ac2d-3b0328ff7b0f.jpg?aki_policy=large"/>
                <SuggestionCard title="Albenga" price="110€" image="https://a0.muscache.com/im/pictures/8fd4dc69-9c20-4cc6-9f64-54c002f67ba0.jpg?aki_policy=large"/>
                <SuggestionCard title="Vico Equense" price="110€" image="https://a0.muscache.com/im/pictures/3645052e-b067-4e34-8978-55f828526dfa.jpg?aki_policy=large"/>
                <SuggestionCard title="Sorrento" price="110€" image="https://a0.muscache.com/im/pictures/92596716-11ee-4f84-8699-05989b3498a3.jpg?aki_policy=large"/>
                <SuggestionCard title="Olbia" price="110€" image="https://a0.muscache.com/im/pictures/2bbabd63-ade7-47ce-95e4-4258b4ea8437.jpg?aki_policy=large"/>
                </div>
                
            </div>
        </div>
    )
}

export default Suggestion
