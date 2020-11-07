const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "type of work out input is required"
        },

        name: {
            type: String,
            trim: true,
            required: "Name of the work out is required"
        },

        duration: {
            type: Number,
            trim: true,
            required: "Workout length required"
        },

        weight: {
            type: Number,
            trim: true,
        },

        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        },
        distance: {
            type: Number
        },
    }]
});


workoutSchema.methods.lastUpdatedDate = function () {
    this.lastUpdated = Date.now();

    return this.lastUpdated;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;