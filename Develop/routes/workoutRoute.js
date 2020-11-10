const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

// creates new work out data set into the data base 
router.post("/api/workouts", ({body}, res) => {
                    Workout.create(
                            body
                        )
                        .then(dbworkoutModel => {
                            res.json(dbworkoutModel);
                        })
                        .catch(err => {
                            res.json(err);
                        });
                });


            // gets previous workout available to be displayed
            router.get("/api/workouts", (req, res) => {
                Workout.find({})
                    .then(dbworkoutModel => {
                        res.json(dbworkoutModel);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            });


            // routes to show all of the workouts in the database
            router.get("/api/workouts/range", (req, res) => {
                Workout.find({})
                    .then(dbworkoutModel => {
                        res.json(dbworkoutModel);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            });
            // adds new exercise to pervious
            router.put("/api/workouts/:id", ({
                body,
                params
            }, res) => {
                Workout.findByIdAndUpdate(
                        params.id, {
                            $push: {
                                exercises: body
                            }
                        }
                    )
                    .then(dbworkoutModel => {
                        res.json(dbworkoutModel);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            });

            module.exports = router;