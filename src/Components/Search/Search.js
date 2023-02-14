import React, { useState, useContext } from 'react'
import Results from '../Results/Results'
import fetchData from '../../apiCalls'
import CharacterContext from '../../CharacterContext'

const Search = () => {
  const [query, setQuery] = useState('')
  const { value, setValue } = useContext(CharacterContext)

const handleClick = async () => {
    const results = await fetchData(`?name=${query}`)
    setValue(results)
  }

  return (
    <div>
      <p>search</p>
      <input 
        type='text' 
        value={query} 
        onChange={(event) => setQuery(event.target.value)}>
      </input>
      <button onClick={handleClick}>Search!</button>
      <Results characters={value} />
    </div>
  )
}

export default Search
