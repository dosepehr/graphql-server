const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        teacher: {
            type: mongoose.Types.ObjectId,
            ref: 'Course',
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
