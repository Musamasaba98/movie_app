import React, { useState } from 'react'
import '../input.css'
import {FaSearch} from 'react-icons/fa'


function Search({movies}) {
    const [movie, setMovie] = useState("")
    const handleSearch = (e) => {
        setMovie(e.target.value)
      };
  return (
    <div className='input-item'>
        <FaSearch className="fa-search"/>
        <input type="text" placeholder='Search Movies' onChange={handleSearch} value={movie} className="input"/>
    </div>
  )
}

export default Search