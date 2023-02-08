import mongoose from "mongoose";
import { ITrip, tripSchema } from "./models/Trip.model";

//* MODELS :
export const Trip = mongoose.model<ITrip>("Trip", tripSchema);
