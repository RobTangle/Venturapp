"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./src/app"));
const config_1 = __importDefault(require("./src/config"));
const LogWithColor_1 = __importDefault(require("./src/miscellanea/LogWithColor"));
const PORT = config_1.default.server.port || 3333;
const MONGO_URI = config_1.default.database.uri;
app_1.default.listen(PORT, () => {
    LogWithColor_1.default.info(`******* Server listening on port ${PORT} *******`);
    console.log("*** Connecting to database........ ");
    mongoose_1.default
        .connect(MONGO_URI)
        .then(() => {
        LogWithColor_1.default.info("******* Connected to MongoDB ******* ");
    })
        .catch((error) => {
        LogWithColor_1.default.error(`*** Unable to connect to MongoDB ***`);
        console.log({ error });
    });
});
