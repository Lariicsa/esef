const User = require('../models/User')
const Student = require('../models/Student')
const passport = require('../config/passport');

exports.home = async (req,res) => {
    User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }))
  }