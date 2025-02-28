import axios from "../api/axios";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// UI
import Stars from "../components/ui/StarsIcon";
import FormData from "../components/ui/FormData";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const card = document.querySelector(".card-movie");

    if (video && card) {
      card.addEventListener("mouseenter", () => {
        video.style.opacity = "1";
        video.play();
      });

      card.addEventListener("mouseleave", () => {
        video.style.opacity = "0";
        video.pause();
        video.currentTime = 0; // Resetează video-ul la început
      });

      return () => {
        card.removeEventListener("mouseenter", () => {
          video.style.opacity = "1";
          video.play();
        });
        card.removeEventListener("mouseleave", () => {
          video.style.opacity = "0";
          video.pause();
          video.currentTime = 0;
        });
      };
    }
  }, []);

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);
  if (!movie) {
    return <p className="text-white">Loading...</p>;
  }

  const starsID = Math.ceil(movie.avg_vote);
  const emptyStarsID = 5 - starsID;

  return (
    <div className="px-5 space-y-6 mt-40">
      <Link to={`/`}>
        <button className="text-white text-xl mb-4 back cursor-pointer">
          <i className="fa-solid fa-arrow-left mr-2"></i>Back Home
        </button>
      </Link>
      <div className="flex bg-gray-400 text-white card-movie gap-2.5">
        <div className="">
          <img className="h-full" src={movie.image} alt={movie.title} />
        </div>
        <div>
          <Stars stars={starsID} emptyStars={emptyStarsID} />
        </div>
        <div className="ml-5 mt-8 space-y-4 relative w-[700px] h-[550px]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/video/titanic-thrailer.mp4"
            loop
            muted
            autoPlay
          ></video>
          <div className="space-y-4">
            <h1 className="text-white font-bold text-4xl">{movie.title}</h1>
            <p className="text-2xl font-medium">year: {movie.release_year}</p>
            <p className="text-2xl font-medium">{movie.genre}</p>
            <p className="text-xl font-medium">{movie.abstract}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 text-white py-4 reviews space-y-3">
        {movie?.reviews?.map((review) => {
          const stars = Math.ceil(review.vote);
          const emptyStars = 5 - stars;

          return (
            <div className="ml-5 comment" key={review.id}>
              <h1 className="font-bold text-xl">Name: {review.name}</h1>
              <div className="text-amber-400">
                <Stars stars={stars} emptyStars={emptyStars} />
              </div>
              <p className=" font-medium mb-2">{review.text}</p>
            </div>
          );
        })}
      </div>
      <FormData />
    </div>
  );
}
