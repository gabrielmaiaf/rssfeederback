require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const cors = require('cors');
const { fetchNews } = require('./helpers/newsapi');

// Routes
const index = require('./routes/index');
const topnews = require('./routes/topnews');

const app = express();

app.use(cors());

app.use('/', index);

app.use('/topnews', topnews);

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});