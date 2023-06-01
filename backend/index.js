const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

require('./utils/connectdb');

require('./strategies/JwtStrategy');
require('./strategies/LocalStrategy');
require("./authenticate")

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));


const whitelist = process.env.WHITELISTED_DOMAINS
    ? process.env.WHITELISTED_DOMAINS.split(',')
    : [];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: process.env.COOKIE_OPTIONS,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', userRouter);

app.get("/", (req, res) => {
    res.send({status: "success", message: "Welcome to the backend!"})
})

const server = app.listen(process.env.PORT || 5001, () => {
    console.log(`Server started on port ${server.address().port}`);
});