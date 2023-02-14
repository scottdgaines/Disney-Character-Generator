import React, { useState } from 'react'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import fetchData from '../../apiCalls'

const Nav = () => {
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue) 
    }

    return [toggleValue, toggler]
  }

  const [toggle, setToggle] = useToggle()
  const searchInput = toggle &&  <Search />

  function fetchRandom() {
    const charId = Math.floor(Math.random() * 5000)
    fetchData(`s/${charId}`)
  }

  return (
    <div>
      <p>Nav</p>
      <button onClick={setToggle}>Search</button>
      <Link to='/:id'>
        <button onClick={fetchRandom}>Generate Random</button>
      </Link>
      <Link to='/favorites'>
        <button>Favorites</button>
      </Link>
      {searchInput}
    </div>
  )
}

export default Nav
