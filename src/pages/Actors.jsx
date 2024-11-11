import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch("http://localhost:4000/actors");
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error("Failed to fetch actors:", error);
      }
    };

    fetchActors();
  }, []); 

  return (
    <>
      <NavBar />
      <main>
        <h1>Actors Page</h1>
        {actors.length > 0 ? (
          actors.map((actor) => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li> 
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading actors...</p> 
        )}
      </main>
    </>
  );
};

export default Actors;
