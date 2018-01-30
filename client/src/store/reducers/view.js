import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  mode: 'all',
  posesLoaded: false,
  filter: 'difficulty',
  filterValue: 'All',
  tag: '',
  currentSlide: 0,
}; //turn into filters, values object which will turn into two arrays on model db request

const reducer = (state = initialState, action) => {
  const { type, mode, filters, value, tag, currentSlide } = action;
  const { SETMODE, POSES_LOADED, RELOAD, FILTER, SET_TAG, SET_SLIDE_INDEX } = actionTypes;
  let setState;
  switch (type) {
    case SET_TAG:
      setState = { tag };
      return updateObject(state, setState);
    case SETMODE:
      setState = { mode, posesLoaded: false };
      return updateObject(state, setState);
    case POSES_LOADED:
      setState = { posesLoaded: true };
      return updateObject(state, setState);
    case RELOAD:
      setState = { posesLoaded: false };
      return updateObject(state, setState);
    case FILTER:
      setState = { filters, filterValue: value, mode: 'filtered', posesLoaded: false };
      return updateObject(state, setState);
    case SET_TAG: 
      setState = { tag, currentSlide };
      return updateObject(state, setState);
    case SET_SLIDE_INDEX:
      setState = { currentSlide };
      return updateObject(state, setState);
    default:
  }
  return state;
};

export default reducer;
