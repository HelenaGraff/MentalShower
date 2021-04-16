const bodyParser=require("body-parser");
const express = require('express');
const cors = require("cors");
const db=require("./app/models");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));



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