import morgan from "morgan";
import helmet from "helmet";
import express, { Request, Response } from "express";
import cors from "cors";
import { rateLimiter } from "./config/rateLimiter";
import tripsRouter from "./routes/trips/trips.controller";
const app = express();

app.use(rateLimiter);
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/trips", tripsRouter);

// testing:
app.get("/ping", (req: Request, res: Response) => {
  return res.send("PONG!");
});

export default app;
