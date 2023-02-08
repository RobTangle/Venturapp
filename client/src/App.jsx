import { Carrousel } from "./components/Carrousel/Carrousel";
import "./app.style.css";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import React from "react";
import { URL_GET_TRIPS } from "./constants/urls";
import { getTrips } from "./helpers";

function App() {
  const [tripsState, setTripsState] = React.useState({
    loading: true,
    error: undefined,
    trips: undefined,
  });
  React.useEffect(() => {
    getTrips(tripsState, setTripsState, URL_GET_TRIPS);
  }, []);

  return (
    <div className="app-container">
      <h1>Welcome to some generic Travel Webpage!</h1>
      <div>
        <Carrousel tripsState={tripsState} />
      </div>
      <div>
        <CardsContainer tripsState={tripsState} />
      </div>
    </div>
  );
}

export default App;
