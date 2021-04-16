module.exports = app => {
    const classrooms = require("../controllers/classroom.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", classrooms.create);
  
    // Retrieve all Tutorials
    router.get("/", classrooms.findAll);
  
    // Retrieve all published Tutorials
   //router.get("/published", classro.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", classrooms.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", classrooms.update);
  
    // Delete a Tutorial with id
   router.delete("/:id", classrooms.delete);
  
    // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/classrooms', router);
  };