const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!')
);

app.listen(3000, () => console.log('app running on port 3000'));
