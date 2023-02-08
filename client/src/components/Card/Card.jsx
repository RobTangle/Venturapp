import "./card.style.css";
import flightTrip64 from "../../assets/flightTrip64.png";

export function Card({ trip }) {
  return (
    <div className="card-container">
      <h3 className="p-name">{trip?.name}</h3>
      <div>
        <img src={flightTrip64} alt="trip image" />
      </div>
      <p>
        Price: {trip?.price} {trip?.currency}
      </p>
    </div>
  );
}
