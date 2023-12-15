const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const walmartRoutes = require('./routes/walmartRoutes');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/walmart", walmartRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/tutor-class").then(() => console.log('connected to MongoDB....'))
.catch((err) => console.log("could not connect to MongoDB", err))

app.use((req, res) =>{
    res.send('Hello world');
});

module.exports = app;