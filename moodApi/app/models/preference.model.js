module.exports = (sequelize, Sequelize) => {
    const Preference = sequelize.define("preference", {
     airQuality: {
        type: Sequelize.INTEGER
      },
      airSpeed: {
        type: Sequelize.INTEGER
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      humidity:{
          type:Sequelize.INTEGER
      },
      studentId:{
        type:Sequelize.INTEGER
     },
      zoneId:{
      type:Sequelize.INTEGER
    }

    });
  
    return Preference;
  };