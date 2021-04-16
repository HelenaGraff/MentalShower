module.exports = app => {
    const zones = require("../controllers/zone.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", zones.create);
  
    // Retrieve all Tutorials
    router.get("/", zones.findAll);
  
    // Retrieve all published Tutorials
  //  router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", zones.findOne);
  
    // Update a Tutorial with id
   router.put("/:id", zones.update);
  
    // Delete a Tutorial with id
   router.delete("/:id", zones.delete);
  
    // Delete all Tutorials
   // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/zones', router);
  };