const {
  SET_CHANGESET
} = require('../constants/action-types');

const changeset = (state = [], action) => {
  switch (action.type) {
    case SET_CHANGESET:
      return action.changeset;
  }
  return state;
};

module.exports = changeset;
