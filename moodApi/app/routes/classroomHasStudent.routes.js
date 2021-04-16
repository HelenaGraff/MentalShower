module.exports = app => {
    const classroomHasStudents = require("../controllers/classroomHasStudent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", classroomHasStudents.create);
  
    // Retrieve all Tutorials
    router.get("/", classroomHasStudents.findAll);
  
    // Retrieve all published Tutorials
  //  router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", classroomHasStudents.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", classroomHasStudents.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", classroomHasStudents.delete);
  
    // Delete all Tutorials
   // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/classroomHasStudents', router);
  };