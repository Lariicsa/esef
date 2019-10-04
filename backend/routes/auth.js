const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Student = require('../models/Student')
const Group = require('../models/Group')
const passport = require('../config/passport')
const { signup } = require('../controllers/auth')

signup.post('/signup', signup)