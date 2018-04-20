const { chain, get, pickBy, isEmpty } = require('lodash');

module.exports = ({ Comparators, normalise, type, schema }) => (oldRecords, newRecords) => {

  normalise = normalise || (record => ({...record}));

  const getChanges = (old, record) => {
    const changes = pickBy(record, (value, key) => {
      const comparator = Comparators[key] || ((a, b) => a !== b);
      return comparator(old[key], value);
    });
    return isEmpty(changes) ? null : changes;
  };

  const diff = record => {
    const existing = oldRecords.find(r => r.id === record.id);
    if (existing) {
      const changes = getChanges(existing, record);
      const display = chain(existing)
        .pickBy((value, key) => schema[key] && schema[key].show)
        .mapValues((value, key) => get(existing, schema[key].accessor || key));
      if (changes) {

        return {
          id: existing.id,
          action: 'amendment',
          existing: display,
          changes,
          type
        };
      }
      return null;
    }
  };

  return newRecords.map(normalise).map(diff).filter(Boolean);

};
