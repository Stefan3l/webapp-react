export default function Stars({ vote }) {
  const starsIcons = [];
  for (let i = 1; 1 <= 5; i++) {
    if (i <= vote) {
      // Stars Full
      starsIcons.push(<i key={i} className="fa-solid fa-star"></i>);
    } else {
      // Stars Empty
      starsIcons.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }
  return <div className="text-amber-300">{starsIcons}</div>;
}
