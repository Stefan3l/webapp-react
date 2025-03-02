import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

import Button from "./ui/Button";

const initialFormData = {
  title: "",
  director: "",
  genre: "",
  release_year: 1000,
  abstract: "",
  image: undefined,
};

export default function FormAddMovies() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();

    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }
    axios
      .post("/movies", dataToSend, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then(() => {
        setFormData(initialFormData);

        // Torno al HomePage
        navigate("/");
      });
    console.log(formData.image);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2">
        <label className="font-medium " htmlFor="title">
          Title
        </label>
        <input
          className="bg-white px-2.5 rounded py-1 font-medium"
          id="title"
          type="text"
          placeholder="Inserisci il title"
          value={formData.title}
          onChange={(e) => handleField("title", e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-medium " htmlFor="director">
          Director
        </label>
        <input
          className="bg-white px-2.5 rounded py-1 font-medium"
          id="director"
          type="text"
          placeholder="Inserisci il nome del director"
          value={formData.director}
          onChange={(e) => handleField("director", e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-medium " htmlFor="genre">
          Genre
        </label>
        <input
          className="bg-white px-2.5 rounded py-1 font-medium"
          id="genre"
          type="text"
          placeholder="Inserisci il genre"
          value={formData.genre}
          onChange={(e) => handleField("genre", e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-medium " htmlFor="release_yea">
          Year
        </label>
        <input
          className="bg-white px-2.5 rounded py-1 font-medium w-20"
          id="release_year"
          type="number"
          placeholder="Inserisci l'anno"
          value={formData.release_year}
          onChange={(e) => handleField("release_year", e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-medium " htmlFor="abstract">
          Abstract
        </label>
        <textarea
          className="bg-white w-full overflow-y-hidden"
          id="abstract"
          type="text"
          placeholder="Inserisci l'abstract"
          value={formData.abstract}
          onChange={(e) => handleField("abstract", e.target.value)}
          row={5}
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-medium " htmlFor="image">
          Image
        </label>
        <input
          className="bg-white px-2.5 rounded py-1 font-medium cursor-pointer"
          id="image"
          type="file"
          placeholder="Inserisci il title"
          onChange={(e) => handleField("image", e.target.files[0])}
          accept="image/*"
          required
        />
      </div>
      <Button type="submit">Crea</Button>
    </form>
  );
}
