import React, { useState } from 'react'
import Search from '../Search/Search'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const [click, setClick] = useState(false)

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue) 
    }

    return [toggleValue, toggler]
  }

  const [toggle, setToggle] = useToggle()

  const searchInput = toggle &&  <Search />

  return (
    <div>
      <p>Nav</p>
      <button onClick={setToggle}>Search</button>
      <NavLink to='/favorites'>
        <button>Favorites</button>
      </NavLink>
      {searchInput}
    </div>
  )
}

export default Nav
