import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import backButton from '../../Assets/back-button.jpeg'
import './Favorites.css'

const Favorites = () => {
  return (
    <div>
      <p>favs</p>
      <NavLink to='id'>
        <Card />
      </NavLink>
      <NavLink to='/'>
        <img className='back-button' src={backButton} />
      </NavLink>
    </div>
  )
}

export default Favorites
