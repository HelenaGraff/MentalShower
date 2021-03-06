const db = require("../models");
const ClassroomHasStudent = db.classroomHasStudents;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   //if (!req.body.title) {
   // res.status(400).send({
   //   message: "Content can not be empty!"
   // });
   // return;
  //}

  // Create a Tutorial
  const classroomHasStudent = {
    studentId: req.body.studentId,
    classroomId: req.body.classroomId,
  };

  // Save Tutorial in the database
  ClassroomHasStudent.create(classroomHasStudent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ClassroomHasStudents."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  ClassroomHasStudent.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ClassroomHasStudents."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  ClassroomHasStudent.findByPk(id).then(data=>{
    res.send(data);
  }).catch(err=>{
    res.status(500).send({
      message:"Error getting clasroomHasStudent with id "+id
    });
  });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  ClassroomHasStudent.update(req.body, {
    where: { id: id }
  })
    .then(num => {
    
      if (num == 1) {
        res.send({
          message: "ClassroomHasStudent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update ClassroomHasStudent with id=${id}. Maybe ClassroomHasStudent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating ClassroomHasStudent with id=" + id
      });
    });
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};