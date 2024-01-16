import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  days: {
    type: [String],
    required: true,
    enum: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  reminder: {
    type: Date
  },
  notes: {
    type: String
  },
  tally: {
    type: Number,
    default: 0 // Default tally set to 0, but the field is optional
  },
  recordedDates: [
    {
      type: Date,
      default: Date.now // Each entry defaults to the current date and time, but the field is optional
    }
  ]
});

// const habitSchema = new mongoose.Schema({
//   customer: {
//     type: String,
//     required: true,
//     validate: /^[A-Za-z0-9 ]*$/
//   },
//   crust: {
//     type: String,
//     required: true,
//     enum: ["thin", "chicago", "deep-dish", "hella-thick"]
//   },
//   cheese: {
//     type: String,
//     validate: /^[A-Za-z0-9 ]*$/
//   },
//   sauce: {
//     type: String,
//     required: true,
//     validate: /^[A-Za-z0-9 ]*$/
//   },
//   toppings: [String]
// });

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
