const mongoose = require('mongoose');

const mongoDBInit = () => {
    const DB_URI = 'mongodb://127.0.0.1:27017/graphql';
    mongoose
        .connect(DB_URI)
        .then(() => console.log('Mongo Connected!'))
        .catch((err) => console.log('Mongo connection error : ', err));
};

module.exports = { mongoDBInit };
