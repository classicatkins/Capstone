import mongoose from "mongoose";

// const routineSchema = new mongoose.Schema({
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

const routineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  // habits: {
  //   type: [String],
  //   required: true
  // },
  notes: {
    type: String
  }
});

const Routine = mongoose.model("Routine", routineSchema);

export default Routine;
