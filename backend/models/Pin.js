const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            require: true,
            min: 0,
            max: 10,
        },
        latitude: {
            type: Number,
            require: true,
        },
        longitude: {
            type: Number,
            require: true
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Pin", PinSchema)