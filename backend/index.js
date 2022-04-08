const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")

dotenv.config();

app.use(express.json())

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connectedski");
    })
    .catch((err) => console.log(err));

    const cors = require('cors')

    app.use(cors())
    app.use("/pins", pinRoute);
    app.use("/users", userRoute);

// local port we're running on

app.listen(4000, () => {
    console.log("backend is running sauce")
})