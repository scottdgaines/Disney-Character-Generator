import React from 'react'
import { NavLink } from 'react-router-dom'
import backButton from '../../Assets/back-button.jpeg'

const View = () => {
  return (
    <div>
      <p>view</p>
      <NavLink to='/'>
        <img className='back-button' src={backButton} />
      </NavLink>
    </div>
  )
}

export default View
