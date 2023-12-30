import { Router } from "express";
import Category from "../models/Category.js";

const router = Router();

// Good stuff goes here
// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newCategory = new Category(request.body);

    const data = await newCategory.save();

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
