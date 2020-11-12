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

}, {
    toJSON: {
        virtuals: true
    }
});


workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;