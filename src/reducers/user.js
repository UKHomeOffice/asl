const { SET_USER } = require('../constants/action-types');

const INITIAL_STATE = {
  id: null,
  name: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.id,
        name: action.name
      };
  }
  return state;
}

module.exports = userReducer;
