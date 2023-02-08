"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;
const config = {
    server: {
        port: PORT,
    },
    database: {
        uri: MONGO_DB_URI || "",
    },
};
exports.default = config;
