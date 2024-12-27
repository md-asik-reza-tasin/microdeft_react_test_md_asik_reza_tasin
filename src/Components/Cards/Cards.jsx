import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Card from "../Card/Card";
import "../Cards/Cards.css";

export default function Cards() {
  const { cards } = useContext(AuthContext);

  console.log(cards);

  return (
    <>
      {cards.length ? (
        <div className="cards">
          {cards.map((card, idx) => (
            <Card card={card} key={idx}></Card>
          ))}
        </div>
      ) : (
        <h1 className="text-5xl mt-16 text-gray-500 opacity-30">NO COURSE</h1>
      )}
    </>
  );
}
