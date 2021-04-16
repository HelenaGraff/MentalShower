const db = require("../models");
const Preference = db.preferences;
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
  const preference = {
    airQuality: req.body.airQuality,
    airSpeed: req.body.airSpeed,
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    zoneId: req.body.zoneId,
    preferenceId: req.body.preferenceId,
  };

  // Save Tutorial in the database
  Preference.create(preference)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Preference."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Preference.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving preferences."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Preference.findByPk(id).then(data=>{
    res.send(data);
  }).catch(err=>{
    res.status(500).send({
      message:"Error getting preference with id "+id
    });
  });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  
  Preference.update(req.body, {
    where: { id: id }
  })
    .then(num => {
    
      if (num == 1) {
        res.send({
          message: " Preference was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update" Preference with id=${id}. Maybe Preference was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Preference with id=" + id
      });
    });
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Preference.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Preference was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Preference with id=${id}. Maybe Preference was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Preference with id=" + id
      });
    });
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};