const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList();
    const allArt = await speakerService.getAllArtwork();
    res.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers, allArt });
  });
  router.get('/:shortname', async (req, res) => {
    const speaker = await speakerService.getSpeaker(req.params.shortname);
    const artForSpeaker = await speakerService.getArtworkForSpeaker(req.params.shortname);
    res.render('layout', {
      pageTitle: 'Speakers',
      template: 'speaker-details',
      speaker,
      artForSpeaker,
    });
  });
  return router;
};
