import { Card } from "../Card/Card";
import React from "react";
import "./carrousel.style.css";

export function Carrousel({ tripsState }) {
  const [index, setIndex] = React.useState(0);

  function handlePrevious() {
    setIndex(
      (index - 1 + tripsState?.trips?.length) % tripsState?.trips?.length
    );
  }

  function handleNext() {
    setIndex((index + 1) % tripsState?.trips?.length);
  }

  if (tripsState.loading) return <p>Loading...</p>;
  if (tripsState.error)
    return (
      <p>
        {`Oops! Something went wrong. ${tripsState.error}. Please, reload and try again.`}
      </p>
    );

  return Array.isArray(tripsState.trips) ? (
    <div>
      <h2 className="h2-text">
        {`Check out these ${tripsState?.trips?.length} amazing trips we've handpicked just for you!`}
      </h2>
      <div className="carrousel-container">
        <button onClick={handlePrevious}>Prev</button>
        <Card trip={tripsState?.trips?.[index]} />
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  ) : null;
}
