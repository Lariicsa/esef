const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const studentSchema = new Schema(
  {
    name: String,
    lastname1: String,
    lastname2: String,
    age: Number,
    gender: String,
    weight: Number,
    height: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

studentSchema.plugin(PLM);

module.exports = model('Student', studentSchema);
