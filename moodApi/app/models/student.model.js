module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
     firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      profilePicUrl:{
          type:Sequelize.STRING
      },
      currentPreference:{
        type:Sequelize.STRING
    }

    });
  
    return Student;
  };