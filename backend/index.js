const express = require("express");
const connection = require("./db")
const cors = require("cors");

require("dotenv").config()

const PORT = process.env.PORT

const authRouter = require("./routes/auth.routes")

const app = express();
app.use(express.urlencoded({utf8: true, extended: true}));


app.use(cors());
app.use(express.json())
app.use("/auth", authRouter)



app.listen(PORT, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log(`Server listening on localhost:${PORT}`)
})
