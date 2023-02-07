import morgan from "morgan";
import helmet from "helmet";
import express, { Request, Response } from "express";
import cors from "cors";
import { rateLimiter } from "./config/rateLimiter";

const app = express();

app.use(rateLimiter);
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req: Request, res: Response) => {
  return res.send("PONG!");
});

export default app;
