const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Student = require('../models/Student')
const Group = require('../models/Group')
const passport = require('../config/passport')
const { home,
  getUserDetail,
  getStudents,
  getStudentDetail,
  addStudent,
  editStudent,
  deleteStudent,
  getGroups,
  getGroupDetail,
  addGroup
} = require('../controllers/index')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user, msg: 'User registered' }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req
  res.status(200).json({ user })
});

router.get('/logout', (req, res, next) => {
  req.logout()
  console.log('bye')
  res.status(200).json({ msg: 'Logged out' })
});

router.get('/', home)
router.get('/user/:id', getUserDetail)
router.get('/students', getStudents)
router.post('/students', addStudent)
router.get('/students/:id', getStudentDetail)
router.delete('/students/:id', deleteStudent)
router.post('/groups', addGroup)
router.put('/editstudent/:id', editStudent)
router.get('/groups', getGroups)
router.get('/groups/:id', getGroupDetail);

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
