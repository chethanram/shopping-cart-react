import { UPDATE_SEARCH } from './actionTypes';

const initialState = {
  type: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
