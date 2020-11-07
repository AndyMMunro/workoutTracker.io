const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    person: {
        type: String,
        unique: true,
    },
    workouts: [{
        type: Schema.Types.ObjectId,
        ref: "workoutModel"
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;