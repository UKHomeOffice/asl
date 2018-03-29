const url = require('url');
const qs = require('qs');
const { createStore } = require('redux');
const rootReducer = require('./reducers');

// if (typeof window === 'undefined') {
//   console.log(new global.Headers());
// }

module.exports = (data, initialFilters) => {
  const stuffs = { ...data, places: { all: data.places }, filters: { ...initialFilters } };
  console.log(stuffs)
  return createStore(rootReducer, stuffs);
}
