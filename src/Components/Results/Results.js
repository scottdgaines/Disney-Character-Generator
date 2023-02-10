import React from 'react'
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom'

const Results = () => {
  return (
    <div>
        <NavLink to='id'>
            <Card />
        </NavLink>
    </div>
  )
}

export default Results
