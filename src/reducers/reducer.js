/* eslint-disable no-param-reassign */

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      state = state.concat(action.payload);
      break;
    case 'DELETE_TASK':
      state = state.slice();
      state.splice(action.payload, 1);
      break;
    default: return state;
  }
  return state;
};

export default reducer;
