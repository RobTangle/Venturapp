import { Request, Response, Router } from "express";
import * as tripsService from "./trips.service";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const trips = await tripsService.getAllTrips();
    return res.status(200).send(trips);
  } catch (error: any) {
    console.log({ error: error.message });
    return res.status(400).send({ error: error.message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newTrip = await tripsService.createTrip(req.body);
    return res.status(201).send(newTrip);
  } catch (error: any) {
    console.log({ error: error.message });
    return res.status(400).send({ error: error.message });
  }
});

export default router;
