'use strict';
require('dotenv').config();
const server=require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT;
const MONGODB_URL=process.env.MONGODB_URL;


mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
})
  .then(() => {
    app.startServer(port);
  })
  .catch(e => console.error('Could not start server', e.message));
