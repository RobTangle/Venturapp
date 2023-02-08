import mongoose, { Schema } from "mongoose";

export interface ITrip {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INewTrip {
  name: string;
  price: number;
  currency: string;
}

// Object to refer to for establishing certain validation values:
export const tripValidValues = {
  name: {
    maxlength: 140,
  },
  price: {
    min: 0,
  },
  currency: {
    minlength: 3, // according to the ISO 4217 standard, all currency codes and their abbreviations are three letters long.
    maxlength: 4, // some crypto currencies are 4 letters long. e.g: USDT / USDC / BUSD
  },
};

export const tripSchema: Schema = new Schema<ITrip>(
  {
    name: {
      type: String,
      required: true,
      maxlength: tripValidValues.name.maxlength,
    },
    price: { type: Number, required: true, min: tripValidValues.price.min },
    currency: {
      type: String,
      required: true,
      uppercase: true,
      minlength: tripValidValues.currency.minlength,
      maxlength: tripValidValues.currency.maxlength,
    },
  },
  { timestamps: true }
);
