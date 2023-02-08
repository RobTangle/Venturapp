import mongoose from "mongoose";
import app from "./src/app";
import config from "./src/config";
import LogWithColors from "./src/miscellanea/LogWithColor";

const PORT = config.server.port || 3333;
const MONGO_URI = config.database.uri;

app.listen(PORT, () => {
  LogWithColors.info(`******* Server listening on port ${PORT} *******`);

  console.log("*** Connecting to database........ ");
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      LogWithColors.info("******* Connected to MongoDB ******* ");
    })
    .catch((error) => {
      LogWithColors.error(`*** Unable to connect to MongoDB ***`);
      console.log({ error });
    });
});
