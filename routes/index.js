const express = require('express');
const router = express.Router();
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (req, res) => {
    // if (!req.session.visitcount) {
    //   req.session.visitcount = 0;
    // }

    // req.session.visitcount += 1;
    const topSpeakers = await speakerService.getList();
    console.log(topSpeakers);
    console.log(`Number of visits: ${req.session.visitcount}`);

    res.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers });
  });
  router.use('/speakers', speakerRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
