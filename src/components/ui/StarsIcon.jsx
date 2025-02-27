export default function Stars({ stars, emptyStars }) {
  return (
    <div className="">
      {Array(stars)
        .fill()
        .map((_, index) => (
          <i className="fa-solid fa-star" key={`full-${index}`}></i>
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <i className="fa-regular fa-star" key={`empty-${index}`}></i>
        ))}
    </div>
  );
}
