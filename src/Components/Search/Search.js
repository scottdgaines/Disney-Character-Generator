import React, { useState } from 'react'
import Results from '../Results/Results'
import fetchSearchData from '../../apiCalls'

const Search = () => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <p>search</p>
      <input 
        type='text' 
        value={query} 
        onChange={(event) => setQuery(event.target.value)}>
      </input>
      <button onClick={() => fetchSearchData(query)}>Search!</button>
     {/* send query to API calls, data returned from that call will set the state in context */}
      <Results />
    </div>
  )
}

export default Search
