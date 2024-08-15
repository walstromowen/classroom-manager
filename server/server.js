const express = require('express');
const mongoose = require('mongoose')
const studentRoute = require('./routes/student.route.js');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
//middleware
app.use(express.json());
//routes
app.use('/student', studentRoute);
app.get('/', (req, res)=>{
    res.send('This is a response from the Classroom Manager Project Server');
});
mongoose.connect('mongodb+srv://walstromowen:6KiT4l1TTqvgiHU9@cluster0.oyqcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to database.');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    });
})
.catch(()=>{
    console.log("Failed to connect to database.")
})
