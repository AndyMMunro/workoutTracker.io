const router = require("express").Router();
const workout = require("../models/workoutModel.js");

// gets all workouts available in the data base
router.get("/api/workouts", (req, res) => {
    workout.find({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});


// creates data base and lets us push info to the database
router.post("/api/workouts", (req, res) => {
    workout.create({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/update/:id", (req, res) => {
    workout.update({
        _id: mongojs.ObjectId(req.params.id)
    }, {
        $set: {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets
        }
    }, (err, data) => {
        if (error) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


module.exports = router