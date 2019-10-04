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

exports.editStudent = async(req, res) => {
  try{
    
    const { id } = req.params
    console.log(req.params);
    
    
    const student = await	Student.findByIdAndUpdate(id, {...req.body})
    console.log(student);
      res.status(200).json({student})
  } catch (err){
    console.log(err);
    
      res.status(500).json({err})
  }
}