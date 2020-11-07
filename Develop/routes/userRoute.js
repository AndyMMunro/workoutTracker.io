const router = require("express").Router();
const User = require("../models/user.js");

router.post("/user")
router.User.create({
        person: "the person working out"
    })
    .then(dbUser => {
        console.log(dbUser);
    })
    .catch(({
        message
    }) => {
        console.log(message);
    });

router.get("/user", (req, res) => {
    User.find({})
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;