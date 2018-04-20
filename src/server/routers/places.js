const { Router } = require('express');

const actions = require('../../actions');
const Tables = require('../../schema');

const api = require('../middleware/api');
const list = require('../middleware/list');
const parse = require('../middleware/parse-csv');

const diff = require('../lib/diff/places');


module.exports = () => {

  const router = Router();

  router.use(api('/places'));

  router.get('/', list({ schema: Tables.places }));

  router.get('/', (req, res, next) => {
    res.template = 'places';
    res.pdfTemplate = 'pdf/places';
    next();
  });

  router.get('/update', (req, res, next) => {
    res.store.dispatch(actions.setChangeset(Object.values(req.session.changes)));
    res.template = 'update';
    next();
  });

  router.post('/update', parse(), (req, res, next) => {
    Promise.resolve()
      .then(() => {
        return diff(res.data, req.records);
      })
      .then(diff => {
        req.session.changes = req.session.changes || {};
        diff.forEach(record => {
          req.session.changes[record.id] = record;
        });
      })
      .then(() => res.redirect(req.originalUrl))
      .catch(next);
  });

  return router;

};
