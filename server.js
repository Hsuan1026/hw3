const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const port = 2048;

app.use("/",express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  })

let student_path = './dist/student.json';
let student_rawdata = fs.readFileSync(student_path);
let student = JSON.parse(student_rawdata);

// app.get('/step1', (req, res) => {
//     res.send('hello world')
//   })

// app.get('/step5', (req, res) => {
//     res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
//   })

// app.post('/step7', (req, res) => {
//     res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
//   })

app.get('/list_all',(req,res)=>{
    res.send(student);
    // console.log(student);
})