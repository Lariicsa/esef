const User = require('../models/User')
const Student = require('../models/Student')
const Group = require('../models/Group')
const School = require('../models/School')
const Measure = require('../models/Measure')

exports.home = async (req, res) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }))
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json({ users })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
}

exports.currentUser = async (req,res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: 'groups',
      populate: {
        path: 'students',
        model: 'Student'
      }
    })
    res.status(200).json({user, msg: 'Logged User'})
  }
  catch {
    (err) => res.status(500).json({ err })
  }
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
    (err) => res.status(500).json({ err, msg: 'Welcome to your dash' })
  }
}

exports.getStudents = async (req, res) => {
  try {
    const { id } = req.params
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
    .populate('group')
    .populate('measurements')
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
  Student.create({ ...req.body, group: group._id, level: group._id })
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

exports.addSchool = async (req, res) => {
  try {
    const { school, user } = req.body
    const newSchool = await School.create(school)
    await User.findByIdAndUpdate(user._id, { $push: { schools: newSchool } })
      .then((school) => res.status(201).json({ school, user, msg: 'School added' }))
  } catch (error) {
    console.log(error)
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
    console.log(req.params);
    
    const group = await Group.findById(id).populate('students')
    res.status(200).json({ group })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
}

exports.addMeasure = async (req, res, next) => {
  try {
    console.log(req.body)
    const studentId = req.body.studentId

    const { measurement } = req.body
    const newMeasures = await Measure.create(measurement)
    console.log(newMeasures);

    await Student.findByIdAndUpdate(studentId, { $push: { measurements: newMeasures } })
      .then((student) => res.status(201).json({ student, msg: 'Measure added' }))

  } catch {
    (err) => res.status(500).json({ err })
  }
}


