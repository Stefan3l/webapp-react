import { useState } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";

// components
import Button from "./ui/Button";

const initialFormData = {
  name: "",
  text: "",
  vote: 0,
};

export default function FormData({ onFormSubmitted }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

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

    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        onFormSubmitted();
      });
  };

  return (
    <div className="bg-gray-400  flex flex-col justify-center reviews  ">
      <h1 className="font-bold text-2xl text-center mt-3 text-white ">
        Lascia la tua recensione
      </h1>
      <form onSubmit={handleSubmit} className="px-4 py-2.5 space-y-2">
        <div className="">
          <label
            className="inline-block mb-1 font-medium text-white"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-white w-full px-2 py-1 rounded-xl"
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleField("name", e.target.value)}
            placeholder="Inserisci il tuo nome"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-white" htmlFor="vote">
            Vote
          </label>
          <input
            className="bg-white  rounded-xl text-center"
            id="vote"
            type="number"
            value={formData.vote}
            onChange={(e) => handleField("vote", e.target.value)}
            min={0}
            max={5}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-white" htmlFor="text">
            Recensione
          </label>
          <textarea
            className="bg-white w-full  rounded-xl px-2 py-2"
            rows="5"
            id="text"
            type="text"
            value={formData.text}
            onChange={(e) => handleField("text", e.target.value)}
            placeholder="Inserisci la tua recensione"
            required
          />
        </div>
        <Button type="submit">Invia</Button>
      </form>
    </div>
  );
}
