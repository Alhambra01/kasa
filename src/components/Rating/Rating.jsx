import "./Rating.scss";

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? "rating__star filled" : "rating__star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
