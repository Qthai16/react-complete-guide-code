import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [fetchApi, setFetchApi] = useState(true);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("https://swapi.dev/api/films");
      const response = await fetch(
        "https://react-demo-http-97abe-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok || response.status !== 200) {
        throw new Error("Something went wrong!!!");
      }
      const data = await response.json();

      // const transformMoviesData = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // const transformData = transformMoviesData(data.results);
      let loadMovies = [];
      for (const key in data){
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        });
      }
      setMovies(loadMovies);
      // .catch((error) => {console.log(error)});
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Found no movies...</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading movies...</p>;
  }

  async function addMovieHandler(movie) {
    try {
      const response = await fetch("https://react-demo-http-97abe-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json", {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok){
        throw new Error("Something when wrong");
      }
      const data = await response.json();
      await fetchMoviesHandler();
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
