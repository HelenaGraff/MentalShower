const db = require("../models");
const Zone = db.zones;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   //if (!req.body.title) {
   // res.status(400).send({
    //  message: "Content can not be empty!"
   // });
   // return;
  //}

  // Create a Tutorial
  const zone = {
    seat1: req.body.seat1,
    seat2: req.body.seat2,
    seat3: req.body.seat3,
    seat4: req.body.seat4,
    classroomId: req.body.classroomId,
  };

  // Save Tutorial in the database
  Zone.create(zone)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Zone."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Zone.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zones."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Zone.findByPk(id).then(data=>{
    res.send(data);
  }).catch(err=>{
    res.status(500).send({
      message:"Error getting zone with id "+id
    });
  });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  Zone.update(req.body, {
    where: { id: id }
  })
    .then(num => {
    
      if (num == 1) {
        res.send({
          message: "Zone was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Zone with id=${id}. Maybe Zone was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Zone with id=" + id
      });
    });
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Zone.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Zone was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Zone with id=${id}. Maybe Zone was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Zone with id=" + id
      });
    });

  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};