const express = require('express');
const router = express.Router();
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = (params) => {
  router.get('/', (req, res) => {
    if (!req.session.visitcount) {
      req.session.visitcount = 0;
    }

    req.session.visitcount += 1;

    console.log(`Number of visits: ${req.session.visitcount}`);

    res.render('pages/index', { pageTitle: 'Welcome' });
  });
  router.use('/speakers', speakerRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
