const bodyParser=require("body-parser");
const express = require('express');
const cors = require("cors");
const db=require("./app/models");
const app = express();

var corsOptions = {
  origin: false
};




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

require("./app/routes/student.routes")(app);
require("./app/routes/zone.routes")(app);
require("./app/routes/preference.routes")(app);
require("./app/routes/classroom.routes")(app);
require("./app/routes/classroomHasStudent.routes")(app);



db.sequelize.sync();
// simple routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mood API." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});