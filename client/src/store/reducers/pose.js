import * as actionTypes from '../actions';
//import { updateObject } from '../utility';
const initialState = {
  poses: [],
};

const reducer = (state = initialState, action) => {
  const { type, pose } = action;
  const { STORE_POSE } = actionTypes;
  switch (type) {
    case STORE_POSE:
      let poses = [];
      poses = pose;
      return { ...state, poses };
    default:
  }
  return state;
};

export default reducer;
