'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');
const notFoundHandler=require('./error-handler/404');
const errorHandler=require('./error-handler/500');
// Prepare the express app
const app = express();
const signin=require('./routes/signin');
const signup=require('./routes/signup');


// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('its work');
});

app.get('/error',(req,res)=>{
    throw new error('error');
});

app.use('/signin',signin);
app.use('/signup',signup);

app.use('*', notFoundHandler);
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  })
  .catch(e => console.error('Could not start server', e.message));

