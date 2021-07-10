'use strict';
require('dotenv').config();
const app=require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT;
const MONGODB_URI=process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
}).then(() => {
  app.startServer(port);
}).catch(e => console.error('Could not start server', e.message));
