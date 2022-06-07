require('dotenv').config();
const express = require('express');
//const cors = require('cors');
const app = express();
const router = require('./routes/index.js');

//app.use(cors);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);

app.listen(process.env.PORT || 8089, () => {
  console.log("server ready");
});