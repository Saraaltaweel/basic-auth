'use strict';
require('dotenv').config();

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const cors=require('cors');
const morgan = require('morgan');
const notFoundHandler=require('./src/error-handler/404');
const errorHandler=require('./src/error-handler/500');


// Prepare the express app
const app = express();
const signin=require('./src/routes/signin');
const signup=require('./src/routes/signup');
const MONGODB_URI=process.env.MONGODB_URI;
app.use(cors());
app.use(morgan('dev'));
const port = process.env.PORT;

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('its work');
});

app.get('/error',(req,res)=>{
    throw new error ('error');
});

app.use('/',signin);
app.use('/',signup);

app.use('*', notFoundHandler);
app.use(errorHandler);

let startServer = (port) => {

  app.listen(port, () => console.log('server up'));
};
module.exports = {app,startServer}