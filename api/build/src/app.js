"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const rateLimiter_1 = require("./config/rateLimiter");
const trips_controller_1 = __importDefault(require("./routes/trips/trips.controller"));
const app = (0, express_1.default)();
app.use(rateLimiter_1.rateLimiter);
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/trips", trips_controller_1.default);
// testing:
app.get("/ping", (req, res) => {
    return res.send("PONG!");
});
exports.default = app;
