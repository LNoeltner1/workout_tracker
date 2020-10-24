const db = require("../models");

//export in one function
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((foundWorkouts) => {
        res.json(foundWorkouts);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve workouts.",
        });
      });
  });
  //   app.get("/api/workouts/:id", (req, res) => {
  //     db.Workout.findById(req.params._id)
  //       .then((foundWorkout) => {
  //         res.json(foundWorkout);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         res.json({
  //           error: true,
  //           data: null,
  //           message: "Failed to retrieve workout.",
  //         });
  //       });
  //   });
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then((foundWorkout) => {
        res.json(foundWorkout);
      })
      .catch((err) => {
        console.log(err);
        // res.json({
        //   err: true,
        //   data: null,
        //   message: "Failed to retrieve range.",
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
        // res.json({
        //   error: true,
        //   data: null,
        //   message: "Failed to create new workout.",
        // });
      });
  });

  //make post and delete for workouts

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      //   req.params._id,
      req.params.id,
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true }
    )
      .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to update workout info.",
        });
      });
  });
};
