const { difference, pick } = require('lodash');
const diff = require('./index');

const schema = require('../../../schema/places');

const type = 'places';

const normalise = record => {
  return {
    ...pick(record, Object.keys(schema)),
    suitability: record.suitability.split(',').map(s => s.trim()),
    holding: record.holding.split(',').map(s => s.trim())
  };
};

const compareArray = (a, b) => {
  return !!(difference(a, b).length || difference(b, a).length);
};

const Comparators = {
  nacwo: (old, record) => {
    try {
      return old.profile.name !== record;
    } catch (e) {
      return old ? record : false;
    }
  },
  suitability: compareArray,
  holding: compareArray
};

module.exports = diff({ Comparators, normalise, type, schema });
