"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNewTrip = void 0;
const Trip_model_1 = require("../mongoDB/models/Trip.model");
function validateNewTrip(bodyFromReq) {
    const validatedNewTripObj = {
        name: validateTripName(bodyFromReq.name),
        price: validateTripPrice(bodyFromReq.price),
        currency: validateTripCurrency(bodyFromReq.currency),
    };
    return validatedNewTripObj;
}
exports.validateNewTrip = validateNewTrip;
function validateTripName(nameFromReq) {
    if (!nameFromReq) {
        throw new Error("The trip name must be a valid string.");
    }
    if (typeof nameFromReq !== "string") {
        throw new Error("The trip name must be a valid string.");
    }
    if (nameFromReq.length > Trip_model_1.tripValidValues.name.maxlength) {
        throw new Error(`Name too long. Maximum length: ${Trip_model_1.tripValidValues.name.maxlength}`);
    }
    return nameFromReq;
}
function validateTripPrice(priceFromReq) {
    if (typeof priceFromReq !== "number" || isNaN(priceFromReq)) {
        throw new Error("The trip price must be a valid number");
    }
    if (priceFromReq < Trip_model_1.tripValidValues.price.min) {
        throw new Error("The trip price can't be a negative number");
    }
    return priceFromReq;
}
function validateTripCurrency(currencyFromReq) {
    if (!currencyFromReq) {
        throw new Error("The trip currency must be a valid string.");
    }
    if (typeof currencyFromReq !== "string") {
        throw new Error("The trip currency must be a valid string.");
    }
    if (currencyFromReq.length > Trip_model_1.tripValidValues.currency.maxlength) {
        throw new Error(`Currency length too long. Maximum length: ${Trip_model_1.tripValidValues.currency.maxlength}`);
    }
    if (currencyFromReq.length < Trip_model_1.tripValidValues.currency.minlength) {
        throw new Error(`Currency length too short. Minimum length: ${Trip_model_1.tripValidValues.currency.minlength}`);
    }
    return currencyFromReq;
}
