import { INewTrip, tripValidValues } from "../mongoDB/models/Trip.model";

export function validateNewTrip(bodyFromReq: any): INewTrip {
  const validatedNewTripObj = {
    name: validateTripName(bodyFromReq.name),
    price: validateTripPrice(bodyFromReq.price),
    currency: validateTripCurrency(bodyFromReq.currency),
  };
  return validatedNewTripObj;
}

function validateTripName(nameFromReq: any): string {
  if (!nameFromReq) {
    throw new Error("The trip name must be a valid string.");
  }
  if (typeof nameFromReq !== "string") {
    throw new Error("The trip name must be a valid string.");
  }
  if (nameFromReq.length > tripValidValues.name.maxlength) {
    throw new Error(
      `Name too long. Maximum length: ${tripValidValues.name.maxlength}`
    );
  }
  return nameFromReq;
}

function validateTripPrice(priceFromReq: any): number {
  if (typeof priceFromReq !== "number" || isNaN(priceFromReq)) {
    throw new Error("The trip price must be a valid number");
  }
  if (priceFromReq < tripValidValues.price.min) {
    throw new Error("The trip price can't be a negative number");
  }
  return priceFromReq;
}

function validateTripCurrency(currencyFromReq: any) {
  if (!currencyFromReq) {
    throw new Error("The trip currency must be a valid string.");
  }
  if (typeof currencyFromReq !== "string") {
    throw new Error("The trip currency must be a valid string.");
  }
  if (currencyFromReq.length > tripValidValues.currency.maxlength) {
    throw new Error(
      `Currency length too long. Maximum length: ${tripValidValues.currency.maxlength}`
    );
  }
  if (currencyFromReq.length < tripValidValues.currency.minlength) {
    throw new Error(
      `Currency length too short. Minimum length: ${tripValidValues.currency.minlength}`
    );
  }
  return currencyFromReq;
}
