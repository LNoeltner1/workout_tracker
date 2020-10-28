const db = require("../models");
//export in one function
module.exports = function (app) {
  app.get("/api/workoutDB", (req, res) => {
    db.Workout.find({})
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
  app.post("/api/workoutDB", (req, res) => {
    db.Workout.create(req.body)
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  app.put("/api/workoutDB/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true }
    )
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  app.get("/api/workoutDB/range", (req, res) => {
    db.Workout.find({})
      .then((allWO) => {
        res.json(allWO);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
};
