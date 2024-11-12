import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() =>{
    fetch(`http://localhost:4000/actors`)
    .then(r => r.json())
    .then(data => {
      setActors(data);
  })
    .catch(error => console.error(error));
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
