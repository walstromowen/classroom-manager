const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: [true, 'Please enter first name']
        },
        lastname:{
            type: String,
        
        },
        gradeLevel:{
            type: Number,
        }
    }
);

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
