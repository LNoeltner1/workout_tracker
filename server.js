const express = require("express");
const mongoose = require("mongoose");
const app = express();

//define port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect to mongodb database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//testing mongoose connection
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

//requiring routes files
require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);

//listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
