import axios from "axios";

// GET TRIPS: Fetches the full list of trips saved in the database and defines tripsState.trips with the array of trips
export async function getTrips(tripsState, setTripsState, url) {
  try {
    console.log("En get trips");
    const response = await axios.get(url);
    const tripsArray = response.data;
    console.log(tripsArray);
    return setTripsState({ ...tripsState, loading: false, trips: tripsArray });
  } catch (error) {
    console.log(error.message);
    setTripsState({ ...tripsState, loading: false, error: error.message });
  }
}
