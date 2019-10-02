const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
  {
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

module.exports = model('Group', groupSchema);
