import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  category: {
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
  dates: {
    type: [String]
  }
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
