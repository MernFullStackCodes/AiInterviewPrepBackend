const express = require("express");
const cookieParser = require('cookie-parser')
const authRouter = require("./routes/auth.routes");
const app = express();
const cors = require('cors')
app.use(cors())


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

module.exports = app;
