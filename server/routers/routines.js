import { Router } from "express";
import Routine from "../models/Routine.js";

const router = Router();

// Good stuff goes here
// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newRoutine = new Routine(request.body);

    const data = await newRoutine.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
