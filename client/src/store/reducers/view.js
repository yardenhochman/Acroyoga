import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  posesLoaded: false,
  difficulty: 'All',
  tag: '',
  currentSlide: 0,
  device: 'Portrait',
};

const reducer = (state = initialState, action) => {
  const { type, filters, value, tag, currentSlide, device } = action;
  const { POSES_LOADED, RELOAD, FILTER, SET_TAG, SET_SLIDE_INDEX, SET_VIEW } = actionTypes;
  let setState;
  switch (type) {
    case SET_TAG:
      setState = { tag };
      return updateObject(state, setState);
    case POSES_LOADED:
      setState = { posesLoaded: true };
      return updateObject(state, setState);
    case RELOAD:
      setState = { posesLoaded: false };
      return updateObject(state, setState);
    case FILTER:
      setState = { filters, difficulty: value, posesLoaded: false };
      return updateObject(state, setState);
    case SET_SLIDE_INDEX:
      setState = { currentSlide };
      return updateObject(state, setState);
    case SET_VIEW:
      setState = { device };
      return updateObject(state, setState);
    default:
  }
  return state;
};

export default reducer;

/*

    case SETMODE:
      setState = { mode, posesLoaded: false };
*/
