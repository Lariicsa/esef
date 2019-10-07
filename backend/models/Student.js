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
    group: {
      ref: 'Group',
      type: Schema.Types.ObjectId
    },
    measurements: [
      {
        ref: 'Measure',
        type: Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Student', studentSchema);
