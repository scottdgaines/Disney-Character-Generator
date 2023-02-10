import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import View from '../View/View'
import Favorites from '../Favorites/Favorites'
import './App.css'
import gif from '../../Assets/star-gif.gif'

const App = () => {
  return (
    <div>
        <h1>Disne[rd]</h1>
        <img className='star' src={gif} alt='a whimsical shooting star' />
        <Route exact path='/' component={Home} />
        <Route path='/id' component={View} />
        <Route path='/favorites' component={Favorites} />
    </div>
  )
}

export default App
