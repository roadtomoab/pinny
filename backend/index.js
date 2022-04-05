const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connectedski");
    })
    .catch((err) => console.log(err));


app.listen(3000, () => {
    console.log("backend is running sauce")
})