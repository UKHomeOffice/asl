const { Router } = require('express');
const update = require('./update');
const submit = require('./submit');
const success = require('./success');
const { getVersion, getComments } = require('@asl/pages/pages/project-version/middleware');

module.exports = () => {
  const app = Router({ mergeParams: true });

  app.use(getVersion());

  app.use(getComments());

  app.use('/submit', submit());
  app.use('/success', success());

  // we always want to serve the same template and
  // scripts for any sub-routes under /edit
  app.use('/*', update());

  app.use((req, res) => res.sendResponse());

  return app;
};
