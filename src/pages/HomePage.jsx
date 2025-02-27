import { useState, useEffect } from "react";
import axios from "../api/axios";

import Card from "../components/Card";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <section className="container max-w-[1000px] mx-auto">
      <h1 className="text-red-600 text-3xl font-bold pt-30 pl-2.5">
        Lista Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4  px-2.5">
        {movies.map((movie) => {
          const stars = Math.ceil(movie.vote);
          const emptyStars = 5 - stars;
          return (
            <div key={movie.id} className="text-red-600 bg-gray-200  card">
              <Card
                image={movie.image}
                title={movie.title}
                link={`/movies/${movie.id}`}
                stars={stars}
                emptyStars={emptyStars}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
