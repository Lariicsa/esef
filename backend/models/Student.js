const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const studentSchema = new Schema(
  {
    name: String,
    lastname1: String,
    lastname2: String,
    age: Number,
    gender: {
      type: String,
      enum: [
        'Masculino',
        'Femenino'
      ]
    },
    weight: Number,
    height: Number,
    pot: Number,
    imc: Number,
    hip: Number,
    gabd: Number,
    vel: Number,
    flex: Number,
    minf: Number,
    abd: Number,
    msup: Number,
    fcrep: Number,
    fce: Number,
    fcrec: Number,
    meters: Number,
    ica: Number,
    level: {
      type: String,
      enum: [
        '1ro',
        '2do',
        '3ro',
        '4to',
        '5to',
        '6to'
      ]
    },
    group: {
      type: String,
      enum: [
        'A',
        'B',
        'C'
      ]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

studentSchema.plugin(PLM);

module.exports = model('Student', studentSchema);
