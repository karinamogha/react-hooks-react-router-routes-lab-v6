import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]); 
  
  useEffect(() =>{
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);
  

  return (
    <>
      <NavBar />
      <main>
        <h1>Home Page</h1>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))
        ) : (
          <p>Loading movies...</p> 
        )}
      </main>
    </>
  );
};

export default Home;


