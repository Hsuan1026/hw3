const express = require('express');
const app = express();
const fs = require("fs");
const port = 2048;

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  })

app.get('/step1', (req, res) => {
    // response browser
    // 回應瀏覽器
    res.send('hello world')
  })