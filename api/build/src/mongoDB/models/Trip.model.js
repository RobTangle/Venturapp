"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripSchema = exports.tripValidValues = void 0;
const mongoose_1 = require("mongoose");
// Object to refer to for establishing certain validation values:
exports.tripValidValues = {
    name: {
        maxlength: 150,
    },
    price: {
        min: 0,
    },
    currency: {
        minlength: 3,
        maxlength: 4, // some crypto currencies are 4 letters long. e.g: USDT / USDC / BUSD
    },
};
exports.tripSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        maxlength: exports.tripValidValues.name.maxlength,
    },
    price: { type: Number, required: true, min: exports.tripValidValues.price.min },
    currency: {
        type: String,
        required: true,
        uppercase: true,
        minlength: exports.tripValidValues.currency.minlength,
        maxlength: exports.tripValidValues.currency.maxlength,
    },
}, { timestamps: true });
