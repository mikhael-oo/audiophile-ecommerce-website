const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const {getToken, COOKIE_OPTIONS, verifyUser, getRefreshToken} = require('../authenticate');
const passport = require('passport');

router.get('/me', verifyUser, (req, res, next) => {
    
    res.send(req.user);
});

router.get('/logout', verifyUser, (req, res, next) => {
    const { signedCookies = {} } = req;
    const { refreshToken } = signedCookies;
    
    User.findById(req.user._id)
        .then(user => {
            const tokenIndex = user.refreshToken.findIndex(
                item => item.refreshToken === refreshToken
            );
 
            if (tokenIndex !== -1) {
                
                user.refreshToken.splice(tokenIndex, 1);
            }

            try {
                user.save();
                res.clearCookie("refreshToken", COOKIE_OPTIONS);
                res.send({ success: true });
            } catch (err) {
                res.status(500).json({message: err, tag: 1});
            }
        }, err => next(err))
        .catch(err => {
            res.status(500).json({message: err, tag: 2});
        })
        
});

router.post('/signup', (req, res, next) => {
    if (!req.body.firstName) {
        return res.status(400).json({message: "First name is required"});
    } else {
        User.register(
            new User({username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName }),
            req.body.password,
            (err, user) => {
                if (err !== null) {
                    res.status(500).json({message: err, tag: 1});
                } else {
                    user.firstName = req.body.firstName;
                    user.lastName = req.body.lastName;
                    const token = getToken({_id: user._id});
                    const refreshToken = getRefreshToken({_id: user._id});
                    user.refreshToken.push({ refreshToken});
                    
                    try {
                        user.save();
                        res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
                        res.send({ success: true, token });

                    } catch (err) {
                        res.status(500).json({message: err, tag: 3});
                    }
                    
                }
            }
        );
                        
    }
});

router.post('/login', passport.authenticate("local"), (req, res, next) => {
    const token = getToken({_id: req.user._id});
    const refreshToken = getRefreshToken({_id: req.user._id});
    User.findById(req.user._id)
        .then(user => {
            user.refreshToken.push({ refreshToken });
            try {
                user.save();
                res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
                res.send({ success: true, token });
            } catch (err) {
                res.status(500).json({message: err, tag: 3});
            }
        }, err => next(err))
        .catch(err => {
            res.status(500).json({message: err, tag: 2});
        });
});

router.post("/refreshToken", (req, res, next) => {
    
    const { signedCookies = {} } = req;
    const { refreshToken } = signedCookies;

    if (refreshToken) {
        try {
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const userId = payload._id;
            User.findOne({ _id: userId })
                .then(user => {
                    if (user) {
                        const tokenIndex = user.refreshToken.findIndex(
                            item => item.refreshToken === refreshToken
                        );
                        if (tokenIndex === -1) {
                            res.status(401).json({ message: "Unauthorized", tag: 1 });
                        } else {
                            const token = getToken({ _id: userId });
                            const newRefreshToken = getRefreshToken({ _id: userId });
                            user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken };
                            user.save();
                            res.cookie("refreshToken", newRefreshToken , COOKIE_OPTIONS);
                            res.send({ success: true, token });
                        }
                    } else {
                        res.status(401).json({ message: "Unauthorized", tag: 2 });
                    }
                }, err => next(err))
        } catch (err) {
            res.status(401).json({ message: "Unauthorized", err,  tag: 4 });
        }
    } else {
        res.status(401).json({ message: "Unauthorized", tag: 5 });
    }
});

module.exports = router;