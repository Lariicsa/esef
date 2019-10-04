const User = require('../models/User')
const Student = require('../models/Student')
const Group = require('../models/Group')
const passport = require('../config/passport');

exports.signup = async (req, res) => {
    User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user, msg: 'User registered' }))
    .catch((err) => res.status(500).json({ err }));
}