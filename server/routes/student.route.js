const express = require('express');
const router = express.Router();
const {getStudents, getStudentByFirstName, addStudent, updateStudent, deleteStudent} = require('../controllers/student.controllers.js');

router.get('/get-all', getStudents);
router.get('/get-by-firstname/:firstname', getStudentByFirstName);
router.post('/add', addStudent)
router.put('/update-one/:id', updateStudent);
router.delete('/delete-one/:id', deleteStudent);

module.exports = router;