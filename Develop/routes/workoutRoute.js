const router = require("express").Router();
const workout = require("../models/workoutModel.js");


router.get("/api/workouts", (req, res) => {
    workout.find({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});


router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


// app.get("/populateduser", (req, res) => {
//     db.User.find({})
//         .populate("notes")
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

module.exports = router