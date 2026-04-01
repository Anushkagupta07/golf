require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const charityRoutes = require("./routes/charityRoutes");
const drawRoutes = require("./routes/drawRoutes");
const userRoutes = require("./routes/userRoutes");
const winnerRoutes = require("./routes/winnerRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));
app.use("/api",authRoutes);
app.use("/api",scoreRoutes);
app.use("/api",charityRoutes);
app.use("/api",drawRoutes);
app.use("/api",userRoutes);
app.use("/api",winnerRoutes);

app.get("/",(req,res)=>{

res.send("API working");

});

app.listen(5000,()=>{

console.log("server running");

});