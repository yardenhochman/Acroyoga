import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  poses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_POSE:
      let poses = [...state]
      poses=action.pose;
      return { ...state, poses }
  }
  return state;
};

export default reducer;
