const express = require("express");
const app = express();
const helmet = require("helmet");
const router = require("./routes/route")
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const connectDb  = require("./database/db");
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(express.json());

//routes
app.use(router)

//connect to Db and start the server
connectDb().then(async () => {
app.listen(port, function () {
  console.log("Felios UBA service on port 💣", port);
});
})
