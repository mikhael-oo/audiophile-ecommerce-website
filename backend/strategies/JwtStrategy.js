const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById(jwt_payload._id)
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }, err => done(err, false))
        .catch(err => done(err, false));

}));