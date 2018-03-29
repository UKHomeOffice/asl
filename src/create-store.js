const url = require('url');
const qs = require('qs');
const { merge } = require('lodash')
const { createStore } = require('redux');
const rootReducer = require('./reducers');
const filtersReducer = require('./reducers/filters');

module.exports = (data, filterBy) => {
  const filters = merge(filtersReducer(undefined, {}), { filterBy });
  return createStore(rootReducer, { ...data, places: { all: data.places }, filters });
}
