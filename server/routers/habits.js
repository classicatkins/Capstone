import { Router } from "express";
import Habit from "../models/Habit.js";

const router = Router();

// Good stuff goes here
// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newHabit = new Habit(request.body);

    const data = await newHabit.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all pizzas route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Habit.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single pizza by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Habit.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a pizza by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Habit.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// router.put("/:id", async (request, response) => {
//   try {
//     const { name, category, days, reminder, dates } = request.body;

//     const data = await Habit.findByIdAndUpdate(
//       request.params.id,
//       { $set: { name, category, days, reminder, dates } },
//       { new: true }
//     );

//     response.json(data);
//   } catch (error) {
//     console.log(error);
//     if ("name" in error && error.name === "ValidationError")
//       return response.status(400).json(error.errors);
//     return response.status(500).json(error);
//   }
// });

//Update a single pizza by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Habit.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          category: body.category,
          days: body.days,
          reminder: body.reminder,
          dates: body.dates
        }
      },
      {
        new: true
      }
    );

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
