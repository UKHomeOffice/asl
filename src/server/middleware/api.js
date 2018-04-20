const actions = require('../../actions');

const format = (url, params) => {
  return url.split('/').map(segment => segment.substr(0, 1) === ':' ? params[segment.substr(1)] : segment).join('/');
};

module.exports = (url) => {
  return (req, res, next) => {
    const establishment = req.user.get('establishment');
    if (!establishment) {
      return next(new Error('No associated establishment'));
    }
    const u = `/establishment/${establishment}${format(url, req.params)}`;
    req.api(u)
      .then(response => {
        res.store.dispatch(actions.setEstablishment(response.json.meta.establishment));
        res.data = response.json.data;
      })
      .then(() => next())
      .catch(e => next(e));
  };
};
