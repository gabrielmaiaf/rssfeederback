const express = require('express');
const router = express.Router();

const { fetchNews, fetchTop } = require('../helpers/newsapi');

router.get('/', (req, res) => {
  fetchTop(1)
    .then(response => res.json(response.articles))
    .catch(error => console.log(error));
})

router.get('/coronavirus', (req, res) => {
  fetchNews('coronavirus', 1)
    .then(response => res.json(response.articles))
    .catch(error => console.log(error));
})

router.get('/ireland', (req, res) => {
  fetchTop(1, 'ie')
    .then(response => res.json(response.articles))
    .catch(error => console.log(error));
})

router.get('/italy', (req, res) => {
  fetchTop(1, 'it')
    .then(response => res.json(response.articles))
    .catch(error => console.log(error));
})


module.exports = router;