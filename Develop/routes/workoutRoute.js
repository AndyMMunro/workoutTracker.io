const router = require("express").Router();
const workout = require("../models/workoutModel.js");

// creates new data set into the data base 
router.post("/api/workouts/", (req, res) => {
    workout.create({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});

// gets all workouts available in the data base to be use in charts
router.get("/api/workouts/", (req, res) => {
    workout.find({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});
// routes to show all of the workouts in the database
router.get("/api/workouts/range", (req, res) => {
    workout.find({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});
// shows the work outs based on ID
router.put("/api/workouts/:id", (req, res) => {
    workout.find({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});
// updates info in data base by utilizing the ID number. 
router.put("/api/workouts/:id", ({
            body
        }, res) => {
            workout.findOneAndUpdate(body)
                .then(({
                    _id
                })) {
                    $push: {
                        workout: _id
                    }
                }, {
                    new: true
                }



            module.exports = router