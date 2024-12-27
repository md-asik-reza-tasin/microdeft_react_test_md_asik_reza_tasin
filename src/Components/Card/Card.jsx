import "../Card/Card.css";
import { IoIosPerson } from "react-icons/io";

export default function Card({ card }) {
  const {
    image,
    title,
    instructor_name,
    badge_text,
    badge_color,
    description,
  } = card;

  return (
    <div className="card">
      <img className="img" src={image} alt="" />
      <div className="container-detail">
        <h1>{title}</h1>
        <div className="flex gap-2 items-center mt-5">
          <IoIosPerson className="text-orange-700" />
          <p>Instructor {instructor_name}</p>
        </div>
        <p className="description">{description}</p>
      </div>
      <div
        className="badge-color opacity-60"
        style={{ backgroundColor: badge_color ? badge_color : "gray" }}
      >
        <p>{badge_text}</p>
      </div>
      <button className="">Buy</button>
      
    </div>
  );
}
