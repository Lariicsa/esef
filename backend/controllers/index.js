const User = require('../models/User')
const Student = require('../models/Student')
const Group = require('../models/Group')
const passport = require('../config/passport');

exports.home = async (req, res) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }))
}


exports.addGroup = async (req, res) => {
  try {
    const { group, user } = req.body
    const newGroup = await Group.create(group)
    await User.findByIdAndUpdate(user._id, { $push: { groups: newGroup } })
    .then((group) => res.status(201).json({ group, user, msg: 'Group added' }) )
  } catch (error) {
    console.log(error)
  }
}


exports.addNewStudent = async (req, res) => {
  try {
    const { student, group } = req.body
    const newStudent = await Student.create(student)
    await Group.findByIdAndUpdate(group._id, { $push: { students: newStudent } })
    .then((students) => res.status(201).json({ students, group, msg: 'Student added' }) )
  } catch (error) {
    console.log(error)
  }
}

