// Defendence
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./server/database/connection");
dotenv.config({ path: "config.env" });
const app = express();
const PORT = 3000;

// database connection
connectDB();

// view engine
app.set("view engine", "ejs");

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));


app.use("/", require("./server/router/router"));

app.listen(PORT, () => {
  console.log(`Server running is port: http://localhost:${PORT}`);
});
