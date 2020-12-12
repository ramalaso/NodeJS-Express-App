const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (req, res, next) => {
    try {
      const speakers = await speakerService.getList();
      const allArt = await speakerService.getAllArtwork();
      return res.render('layout', {
        pageTitle: 'Speakers',
        template: 'speakers',
        speakers,
        allArt,
      });
    } catch (error) {
      return next(error);
    }
  });

  router.get('/:shortname', async (req, res, next) => {
    try {
      const speaker = await speakerService.getSpeaker(req.params.shortname);
      const artForSpeaker = await speakerService.getArtworkForSpeaker(req.params.shortname);
      return res.render('layout', {
        pageTitle: 'Speakers',
        template: 'speaker-details',
        speaker,
        artForSpeaker,
      });
    } catch (error) {
      return next(error);
    }
  });

  return router;
};
