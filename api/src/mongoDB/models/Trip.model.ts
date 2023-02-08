import mongoose, { Schema } from "mongoose";

export interface ITrip {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
  currency: string;
}

export interface INewTrip {
  name: string;
  price: number;
  currency: string;
}

export const tripSchema: Schema = new Schema<ITrip>(
  {
    name: { type: String, required: true, maxlength: 150 },
    price: { type: Number, required: true },
    currency: { type: String, required: true, uppercase: true },
  },
  { timestamps: true }
);
