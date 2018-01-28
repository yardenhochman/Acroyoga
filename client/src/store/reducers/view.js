import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  mode: 'all',
  loaded: false,
  filter: 'difficulty',
  filterValue: 'All',
  tag: '',
}; //turn into filters, values object which will turn into two arrays on model db request

const reducer = (state = initialState, action) => {
  const { type, mode, filters, value, tag } = action;
  const { SETMODE, LOADED, RELOAD, FILTER, SET_TAG } = actionTypes;
  let setState;
  switch (type) {
    case SET_TAG:
      setState = { tag };
      return updateObject(state, setState);
    case SETMODE:
      setState = { mode, loaded: false };
      return updateObject(state, setState);
    case LOADED:
      setState = { loaded: true };
      return updateObject(state, setState);
    case RELOAD:
      setState = { loaded: false };
      return updateObject(state, setState);
    //change difficulty & filter
    case FILTER:
      setState = { filters, filterValue: value, mode: 'filtered', loaded: false };
      return updateObject(state, setState);
    case SET_TAG:
      setState = { tag };
      return updateObject(state, setState);
    default:
  }
  return state;
};

export default reducer;
