const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  phone: Number,
  age: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;