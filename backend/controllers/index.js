const User = require('../models/User')
const Student = require('../models/Student')
const Group = require('../models/Group')

exports.home = async (req, res) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }))
}

exports.getUserDetail = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id).populate({
      path: 'groups',
      populate: {
        path: 'students',
        model: 'Student'
      }
    })
    res.status(200).json({ user })
  } catch {
    (err) => res.status(500).json({ err })
  }
}

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find()

    res.status(200).json({ students })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
}

exports.getStudentDetail = async (req, res) => {
  try {
    const { id } = req.params
    const student = await Student.findById(id)
    res.status(200).json({ student })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
}

exports.editStudent = async (req, res) => {
  try {
    const { id } = req.params
    const student = await Student.findByIdAndUpdate(id, { ...req.body })
    res.status(200).json({ student })
  } catch (err) {
    console.log(err)
    res.status(500).json({ err })
  }
}

exports.addStudent = async (req, res, next) => {
  const group = await Group.findOne({ $and: [{ level: req.body.level }, { group: req.body.group }] })
  const height = req.body.height
  const weight = req.body.weight
  const hip = req.body.hip
  const fcrep = req.body.fcrep
  const fce = req.body.fce
  const fcrec = req.body.fcrec
  const meters = req.body.meters
  let pot = height * 2
  let imc = weight / pot
  let gabd = hip / height
  let ica = (fcrep + fce + fcrec) / meters
  ica = 20
  Student.create({ ...req.body, pot, imc, hip, gabd, ica, group: group._id, level: group._id })
    .then((student) => {
      Group.findByIdAndUpdate(group._id, { $push: { students: student._id } }, { new: true })
        .then(groupUpdated => {
          res.status(201).json({ student, msg: 'Student added and group updated', groupUpdated })
        })
        .catch((err) => res.status(500).json({ err }))
    })
    .catch((err) => res.status(500).json({ err }));
}

exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params
    const student = await Student.findByIdAndDelete(id)
    res.status(200).json({ student, msg: 'Student deleted' })
  }
  catch {
    (err) => res.status(500).json({ err })
  }

}

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find()
    res.status(200).json({ groups })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
}

exports.getGroupDetail = async (req, res) => {
  try {
    const { id } = req.params
    const group = await Group.findById(id).populate('students')
    res.status(200).json({ group })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
}

exports.addGroup = async (req, res) => {
  try {
    const { group, user } = req.body
    const newGroup = await Group.create(group)
    await User.findByIdAndUpdate(user._id, { $push: { groups: newGroup } })
      .then((group) => res.status(201).json({ group, user, msg: 'Group added' }))
  } catch (error) {
    console.log(error)
  }
}