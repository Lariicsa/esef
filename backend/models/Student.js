const { Schema, model } = require('mongoose');

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
        ref: 'Group',
        type: Schema.Types.ObjectId
      },
    group: {
        ref: 'Group',
        type: Schema.Types.ObjectId
      }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Student', studentSchema);
