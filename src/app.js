const express = require('express');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
require('dotenv/config');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// posts routes
app.use('/posts', router);

// Connect to DB
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!')
);

app.listen(3000, () => console.log('app running on port 3000'));
