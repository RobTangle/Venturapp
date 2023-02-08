import { Trip } from "../../mongoDB";
import { INewTrip } from "../../mongoDB/models/Trip.model";
import { validateNewTrip } from "../../validators/trips.validator";

export async function getAllTrips() {
  const tripsFromDB = await Trip.find({});
  return tripsFromDB;
}

export async function createTrip(bodyFromReq: any) {
  const validatedNewTripObj: INewTrip = validateNewTrip(bodyFromReq);
  const newTrip = await Trip.create(validatedNewTripObj);
  return newTrip;
}
