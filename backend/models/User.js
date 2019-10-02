const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    lastname1: String,
    lastname2: String,
    email: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM);

module.exports = model('User', userSchema);
