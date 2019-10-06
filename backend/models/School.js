const { Schema, model } = require('mongoose');

const schoolSchema = new Schema(
  {
      name: String,
      schoolId: String,
      principal: String,
      users: [
        {
          ref: 'User',
          type: Schema.Types.ObjectId
        }
      ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('School', schoolSchema);
