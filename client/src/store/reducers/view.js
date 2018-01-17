import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  mode: 'filtered',
  loaded: false,
  filter: 'difficulty',
  filterValue: 'Intermediate',
}; //turn into filters, values object which will turn into two arrays on model db request

const reducer = (state = initialState, action) => {
  let setState;
  switch (action.type) {
    case actionTypes.SETMODE:
      setState = { mode: action.mode, loaded: false };
      return updateObject(state, setState);
    case actionTypes.LOADED:
      setState = { loaded: true };
      return updateObject(state, setState);
    case actionTypes.RELOAD:
      setState = { loaded: false };
      return updateObject(state, setState);
    //change difficulty & filter
    case actionTypes.FILTER:
      setState = { filters: action.filter, filterValue: action.value, mode: 'filtered', loaded: false };
      return updateObject(state, setState);
    default:
  }
  return state;
};

export default reducer;
