import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ character }) => {
  return (
        <div>
        <p>{character.name}</p>
        <img src={character.image} />
        </div>
  )
}

export default Card
