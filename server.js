const express = require('express');
const app = express();
const fs = require("fs");
const port = 2048;

app.use("/",express.static(__dirname));
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  })

app.get('/step1', (req, res) => {
    res.send('hello world')
  })

app.get('/step5', (req, res) => {
res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})