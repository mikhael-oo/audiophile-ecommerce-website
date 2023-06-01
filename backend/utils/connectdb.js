const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
const connect = mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    
});

connect
    .then((db) => {
        console.log('Connected correctly to server');
    })
    .catch((err) => {
        console.log(err);
    });