import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]); 
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        setMovies(data); 
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
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


