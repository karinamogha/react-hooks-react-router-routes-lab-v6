import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await fetch("http://localhost:4000/directors");
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error("Failed to fetch directors:", error);
      }
    };

    fetchDirectors();
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


