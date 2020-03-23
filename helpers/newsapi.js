require('dotenv').config({ path: '../variables.env' });
const moment = require('moment');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const oneWeek = moment().subtract(1, 'week').format(moment.HTML5_FMT.DATE);
const now = moment().format(moment.HTML5_FMT.DATE);

const fetchTop = (pageNum, country = 'br') => newsapi.v2.topHeadlines({
  country,
  page: pageNum,
  pageSize: 10,
})

const fetchNews = (searchTerm, pageNum) => newsapi.v2.everything({
  q: searchTerm,
  from: oneWeek,
  to: now,
  page: pageNum,
  pageSize: 10,
})

module.exports = {
  fetchNews,
  fetchTop
}