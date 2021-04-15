module.exports = (sequelize, Sequelize) => {
    const Classroom = sequelize.define("classroom", {
     courseName: {
        type: Sequelize.STRING
      },
      classroomName: {
        type: Sequelize.STRING
      }

    });
  
    return Classroom;
  };