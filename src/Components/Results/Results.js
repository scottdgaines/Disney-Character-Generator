import React, { useContext } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const Results = ({ characters }) => {
    const characterCards = characters.map(char => {
        return (
            <Link to={`/${char.id}`}>
                <Card 
                    key={char.id} 
                    character={char} 
                />
            </Link>
        )
    })

    return (
        <div>
            {characterCards}
        </div>
    )
}

export default Results
