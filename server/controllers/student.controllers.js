const Student = require('../models/student.model.js')

const getStudents = async(req, res)=>{
    try{
        const students =  await Student.find({});
        res.status(200).json(students);
     }catch(error){
         res.status(500).json({message: error.message});
     }
}
const getStudentByFirstName = async (req, res)=>{
    try{
        const {firstname} =  req.params;
        const students = await Student.find({firstname: firstname}).limit(1);
        res.status(200).json(students);
     }catch(error){
         res.status(500).json({message: error.message});
     }
};
const addStudent = async (req, res)=>{
    try{
       const student =  await Student.create(req.body)
       res.status(200).json(student);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
const updateStudent = async (req, res)=>{
    try{
        const {id} =  req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if(!student){
            return res.status(404).json({message: 'Student not found'})
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
const deleteStudent = async (req, res)=>{
    try{
        const {id} =  req.params;
        const student = await Student.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message: 'Student not found'})
        }
        res.status(200).json({message: 'Student sucessfully deleted'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
module.exports = {getStudents, getStudentByFirstName, addStudent, updateStudent, deleteStudent};