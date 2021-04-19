const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./student.model.js")(sequelize, Sequelize);
db.preferences= require("./preference.model.js")(sequelize, Sequelize);
db.zones = require("./zone.model.js")(sequelize, Sequelize);
db.classrooms = require("./classroom.model.js")(sequelize, Sequelize);
db.classroomHasStudents = require("./classroomHasStudent.model.js")(sequelize, Sequelize);

db.classrooms.hasMany(db.zones,{as :"zones"});
db.zones.belongsTo(db.classrooms,{foreignKey:"classroomId",as : "classroom"});

db.students.belongsToMany(db.classrooms,{through: "student_classroom", as: "classrooms", foreignKey: "studentId"});
db.classrooms.belongsToMany(db.students,{through: "student_classroom", as: "students", foreignKey: "classroomId"});

module.exports = db;