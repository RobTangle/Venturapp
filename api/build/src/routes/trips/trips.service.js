"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrip = exports.getAllTrips = void 0;
const mongoDB_1 = require("../../mongoDB");
const trips_validator_1 = require("../../validators/trips.validator");
function getAllTrips() {
    return __awaiter(this, void 0, void 0, function* () {
        const tripsFromDB = yield mongoDB_1.Trip.find({});
        return tripsFromDB;
    });
}
exports.getAllTrips = getAllTrips;
function createTrip(bodyFromReq) {
    return __awaiter(this, void 0, void 0, function* () {
        const validatedNewTripObj = (0, trips_validator_1.validateNewTrip)(bodyFromReq);
        const newTrip = yield mongoDB_1.Trip.create(validatedNewTripObj);
        return newTrip;
    });
}
exports.createTrip = createTrip;
