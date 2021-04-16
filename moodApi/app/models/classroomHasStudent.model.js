module.exports = (sequelize, Sequelize) => {
    const classroomHasStudent = sequelize.define("classroomHasStudent", {
     classroomId: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.STRING
      }

    });
  
    return classroomHasStudent;
  };