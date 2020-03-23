const express = require('express');
const router = express.Router();
const Parser = require('rss-parser');

const FEED_LIST = [
  'https://reactjs.org/feed.xml'
];

// Home
router.get('/', (req, res) => {
  let parser = new Parser();

  const feedRequests = FEED_LIST.map(feed => {
    return parser.parseURL(feed);
  })

  Promise.all(feedRequests).then(response => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', 'some-domain-to-allow.com');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.json(response);
  })
});

module.exports = router;