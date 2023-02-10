import React, { useState } from 'react'
import Search from '../Search/Search'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const [click, setClick] = useState(false)

  const searchInput = click &&  <Search />

  return (
    <div>
      <p>Nav</p>
      <button onClick={() => setClick(true)}>Search</button>
      <NavLink to='/favorites'>
        <button>Favorites</button>
      </NavLink>
      {searchInput}
    </div>
  )
}

export default Nav
