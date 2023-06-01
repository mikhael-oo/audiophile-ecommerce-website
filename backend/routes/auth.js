const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

let token = "";

const CLIENT_URL = "http://localhost:5173"

