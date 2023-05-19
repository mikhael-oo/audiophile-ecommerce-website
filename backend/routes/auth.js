const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Passport configuration
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
},
    async (accessToken, refreshToken, profile, done) => {
        console.log('profile', profile);
        User.findOne({ googleId: profile.id }, async (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                user = new User({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value
                });
                await user.save();
            }
            return done(null, user);
        }
    );
}));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
});