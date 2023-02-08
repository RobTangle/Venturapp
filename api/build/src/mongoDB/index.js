"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Trip_model_1 = require("./models/Trip.model");
//* MODELS :
exports.Trip = mongoose_1.default.model("Trip", Trip_model_1.tripSchema);
