const { combineReducers } = require('redux');
const establishment = require('./establishment');
const list = require('./list');
const profile = require('./profile');
const changeset = require('./changeset');

module.exports = combineReducers({
  establishment,
  list,
  profile,
  changeset
});
