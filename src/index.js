const express = require('express');
//const cors = require('cors');
const app = express();

//app.use(cors);
require('dotenv').config();

app.get('/', (req, res) => {
  res.send("Hello World!");
})

app.listen(process.env.PORT || 8089, () => {
  console.log("server ready");
});