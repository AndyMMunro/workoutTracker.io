const app = require("express");
const workout = require("../modles/workoutModel.js");


app.get("/workout", (req, res) => {
    db.workoutModel.find({})
        .then(dbworkoutModel => {
            res.json(dbworkoutModel);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/submit", ({
    body
}, res) => {
    db.Note.create(body)
        .then(({
            _id
        }) => db.User.findOneAndUpdate({}, {
            $push: {
                notes: _id
            }
        }, {
            new: true
        }))
        .then(dbUser => {
            res.json(dbUser);
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