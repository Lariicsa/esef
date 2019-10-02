const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Student = require('../models/Student');
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user, msg: 'User registered' }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req
  res.status(200).json({ user })
});

router.get('/logout', (req, res, next) =>{
  req.logout()
  console.log('bye')
  res.status(200).json({msg: 'Logged out'})
});

router.get('/', (req,res, next) => {
  User.findById(req.user._id)
  .then((user) => res.status(200).json({ user }))
  .catch((err) => res.status(500).json({ err }))
});

router.get('/profile', (req,res, next) => {
  User.findById(req.user._id)
  .then((user) => res.status(200).json({ user }))
  .catch((err) => res.status(500).json({ err }))
});

router.post(('/addstudent'), (req, res,next) => {
  const height = req.body.height 
  const weight = req.body.weight
  const hip = req.body.hip
  const fcrep = req.body.fcrep
  const fce = req.body.fce
  const fcrec = req.body.fcrec
  const meters = req.body.meters
  

  let pot = height*2
  let imc = weight/pot
  let gabd = hip / height
  let ica = (fcrep + fce + fcrec)/meters

  Student.create({...req.body, pot, imc, hip, gabd, ica})
  .then((student) => res.status(201).json({ student, msg: 'Student added' }) )
  .catch((err) => res.status(500).json({ err }));
  
})

router.get('/viewstudents', async(req,res, next) => {
  try {
    const students = await Student.find()

    res.status(200).json({ students })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
});

router.get('/students/:id', async(req,res, next) => {
  try {
    const {id} = req.params
    const student = await Student.findById(id)
    res.status(200).json({ student })
  }
  catch {
    (err) => res.status(500).json({ err })
  }
});


function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
