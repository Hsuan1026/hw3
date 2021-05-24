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


app.get('/list_all',(req,res)=>{
    res.send(student);
})
app.get('/search_name',(req,res)=>{
  if(student[req.query.ID]!=undefined){
    res.send(`Hello, ${student[req.query.ID]}`);
  }else{
    res.send("No result");
  }
})
app.get('/add_student',(req,res)=>{
  student[req.query.ID] = req.query.name;
  fs.writeFile(student_path,JSON.stringify(student),(err)=>{
    if(err){
      res.send('Fail');
    }else{
      res.send('Success');
    }
  })
})
app.get('/delete_student',(req,res)=>{
  if(student[req.query.ID]==undefined){
    res.send("Fail!!No result");
  }else{
    delete student[req.query.ID];
    fs.writeFile(student_path,JSON.stringify(student),(err)=>{
      if(err){
        res.send('Fail');
      }else{
        res.send('Success');
      }
    })
  }
})