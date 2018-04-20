const rootReducer = require('src/reducers');

describe('Root Reducer', () => {
  test('creates the expected initial state', () => {
    const expected = {
      changeset: [],
      establishment: {},
      profile: {},
      list: {
        all: [],
        filtered: [],
        filter: '',
        schema: [],
        sort: {
          column: '',
          ascending: true
        }
      }
    };
    expect(rootReducer(undefined, {})).toEqual(expected);
  });
});
