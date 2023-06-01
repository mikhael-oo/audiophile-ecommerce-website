const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

//Called during login/sign up
passport.use(new LocalStrategy(User.authenticate()))

//Called after login/sign up to set user details in req.user
passport.serializeUser(User.serializeUser())

//Called when a request comes with a cookie containing user id
passport.deserializeUser(User.deserializeUser())