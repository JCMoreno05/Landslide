const express = require("express");
const app = express();
const mysql=require("mysql")
const dotenv = require("dotenv");
const cors = require("cors");

const route1 = require("./routes/route1")

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/server/route1group",route1);

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "password",
    database: "mvp_db"
})

app.listen(8800,()=>{
    console.log("Backend server is running.")
})