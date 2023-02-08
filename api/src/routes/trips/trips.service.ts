import { Trip } from "../../mongoDB";

export async function getAllTrips() {
  const tripsFromDB = await Trip.find({});
  return tripsFromDB;
}

export async function createTrip(bodyFromReq: any) {
  // const validatedNewTripObj = validateNewTrip(bodyFromReq)
  const validatedNewTripObj = bodyFromReq;
  const newTrip = await Trip.create(validatedNewTripObj);
  return newTrip;
}
