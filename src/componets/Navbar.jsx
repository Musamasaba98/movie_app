import React from 'react'
import Search from './Search'

function Navbar({movies}) {
  return (
    <div className='navbar'>
        <h1 className='heading'>TRENDING MOVIES</h1>
        <Search movies={movies}/>
    </div>
  )
}

export default Navbar