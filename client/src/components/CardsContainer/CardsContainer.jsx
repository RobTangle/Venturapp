import { Card } from "../Card/Card";
import "./cardsContainer.style.css";

export function CardsContainer({ tripsState }) {
  return Array.isArray(tripsState.trips) ? (
    <div className="cards-container">
      {tripsState.trips
        ? tripsState.trips.map((trip) => <Card trip={trip} key={trip._id} />)
        : null}
    </div>
  ) : null;
}
