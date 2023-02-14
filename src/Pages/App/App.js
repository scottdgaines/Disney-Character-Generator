import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import View from '../View/View'
import Favorites from '../Favorites/Favorites'
import './App.css'
import gif from '../../Assets/star-gif.gif'
import CharacterContext from '../../CharacterContext'

const App = () => {
    const [value, setValue] = useState()

  return (
    <CharacterContext.Provider value={{ value, setValue }}>
        <div>
            <h1>Disne[rd]</h1>
            <img className='star' src={gif} alt='a whimsical shooting star' />
            <Route exact path='/' component={Home} />
            <Route exact path='/:id' render={({ match }) => {
                console.log(match)
                const id = parseInt(match.params.id)
                return <View />
            }} />
            <Route path='/favorites' component={Favorites} />
        </div>
    </CharacterContext.Provider>
  )
}

export default App
