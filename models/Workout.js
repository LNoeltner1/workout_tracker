const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Workout name is required.",
  },
  //add workout type
  //add workout time length
  //add workout completed boolean
  //add workout distance/reps?
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
