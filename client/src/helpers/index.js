import axios from "axios";

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
