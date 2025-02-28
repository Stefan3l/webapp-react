import { Link } from "react-router-dom";

import StarsIcon from "../components/ui/StarsIcon";
import Button from "./ui/Button";

export default function Card({ image, title, stars, emptyStars, link }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <img className="" src={image} alt={title} />
      <h2 className="text-center mt-2 font-semibold text-xl ">{title}</h2>
      <div>
        <StarsIcon stars={stars} emptyStars={emptyStars} />
      </div>
      <Link to={link}>
        <Button>View more...</Button>
      </Link>
    </div>
  );
}
