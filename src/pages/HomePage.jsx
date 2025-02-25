import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <div className=" flex justify-center w-full relative">
        <img
          className="w-1/4 absolute -mt-[70px] logo"
          src="../images/Logo.png"
          alt="logo"
        />
      </div>
      <hr />
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}
