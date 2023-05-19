require('dotenv').config();
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const morgan = require('morgan');

app.use(morgan('dev'));

try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (error) {
    console.log(error);
}

const port = process.env.PORT || 5000;

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth', auth);



app.listen(port, () => console.log(`App listening on port ${port}!`));
