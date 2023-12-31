require("dotenv").config();
const connectDB = require('./config/db');
const express = require("express");

// Routes
const conceptsRoute = require("./routes/conceptsRoute")

connectDB();
const app = express();
app.use(express.json({limit : "110kb"})),
app.use("/api/v1/concepts" , conceptsRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Corriendo en el puerto ${process.env.PORT}`)
})




