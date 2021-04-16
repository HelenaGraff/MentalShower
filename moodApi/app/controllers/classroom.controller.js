const db = require("../models");
const Classroom = db.classrooms;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   // if (!req.body.title) {
   // res.status(400).send({
   //   message: "Content can not be empty!"
   // });
   // return;
  //}

  // Create a Tutorial
  const classroom = {
    courseName: req.body.courseName,
    classroomName: req.body.classroomName,
  };

  // Save Tutorial in the database
  Classroom.create(classroom)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Classrooms."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Classroom.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Classroom."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Classroom.findByPk(id).then(data=>{
      res.send(data);
    }).catch(err=>{
      res.status(500).send({
        message:"Error getting classroom with id "+id
      });
    });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  Classroom.update(req.body, {
    where: { id: id }
  })
    .then(num => {
    
      if (num == 1) {
        res.send({
          message: "Classroom was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Classroom with id=${id}. Maybe Classroom was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Classroom with id=" + id
      });
    });
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Classroom.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Classroom was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Classroom with id=${id}. Maybe Classroom was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Classroom with id=" + id
      });
    });
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};