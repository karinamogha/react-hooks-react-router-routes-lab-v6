import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() =>{
    fetch(`http://localhost:4000/actors`)
    .then(r => r.json())
    .then(data => {
      setDirectors(data);
  })
    .catch(error => console.error(error));
  }, []); 

  return (
    <>
      <NavBar />
      <main>
        <h1>Directors Page</h1>
        {directors.length > 0 ? (
          directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li> 
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>Loading directors...</p> 
        )}
      </main>
    </>
  );
};

export default Directors;


