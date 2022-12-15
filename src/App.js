import { useEffect, useState } from 'react';
import './App.css';
import Movie from './componets/Movie';


function App() {
  const API_URL="https://api.themoviedb.org/3/trending/all/week?api_key=39c5c02d12f04b7ad749d677aa191591"
  const base_url="http://image.tmdb.org/t/p/w185"
  let [movies,setMovies]=useState([])
  
  useEffect(()=>{
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  },[])
  return (
    <div className="App">
      <h1>TRENDING MOVIES</h1>
      <div className='movies'>
        {
        movies.map((movie,key)=>
        <Movie key={key} title={movie.title||movie.name} 
        overview={movie.overview} poster={base_url + movie.poster_path} 
        vote_count={movie.vote_count} release_date={movie.release_date}/>
        )
      }
      </div>  
    </div>
  );
}

export default App;
