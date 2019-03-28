const { pick, get } = require('lodash');
const { page } = require('@asl/service/ui');
const form = require('@asl/pages/pages/common/routers/form');
const schema = require('./schema');

module.exports = settings => {
  const app = page({
    ...settings,
    root: __dirname
  });

  app.use(form({ schema }));

  app.post('/', (req, res, next) => {
    const values = pick(req.session.form[req.model.id].values, Object.keys(schema));
    const taskId = get(req.project, 'openTasks[0].id');
    const comment = get(req.session, `form[${taskId}-decision].values.comment`);
    const json = {
      meta: {
        ...values,
        comment
      }
    };
    req.api(`/establishments/${req.establishmentId}/projects/${req.projectId}/project-versions/${req.versionId}/submit`, { method: 'POST' })
      .then(() => req.api(`/establishments/${req.establishmentId}/projects/${req.projectId}/grant`, { method: 'POST', json }))
      .then(() => res.redirect(req.buildRoute('project.success')))
      .catch(next);
  });

  return app;
};