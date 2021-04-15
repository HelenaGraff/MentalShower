module.exports = (sequelize, Sequelize) => {
    const Zone = sequelize.define("zone", {
     classroomId: {
        type: Sequelize.STRING
      },
      seat1: {
        type: Sequelize.INTEGER
      },
      seat2: {
        type: Sequelize.INTEGER
      },
      seat3: {
        type: Sequelize.INTEGER
      },
      seat4: {
        type: Sequelize.INTEGER
      }

    });
  
    return Zone;
  };