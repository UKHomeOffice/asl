const createStore = require('../../create-store');

module.exports = () => {
  return (error, req, res, next) => {
    if (error.status !== 404) {
      console.error(error);
    }
    res.status(500);
    if (error.status) {
      res.status(error.status);
    }
    res.render('error', { error, store: createStore() });
  };
};
