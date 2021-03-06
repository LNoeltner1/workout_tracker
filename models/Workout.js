const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//abstracting the object to a variable
const virtTrue = { toJSON: { virtuals: true } };

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number },
      },
    ],
  },
  virtTrue
);

//virtual
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

//exports the model
module.exports = Workout;
