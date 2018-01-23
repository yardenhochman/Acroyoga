import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
  name: '',
  difficulty: '',
  lists: [],
};
const reducer = (state = initialState, action) => {
  let setState;
  switch (action.type) {
    case actionTypes.FILL_USER:
      setState = action.user;
      return updateObject(state, setState);
    case actionTypes.LOG_OUT:
      setState = initialState;
      return updateObject(state, setState);
    case actionTypes.COLLECT_POSE:
      let newLists = [...state.lists];
      newLists[action.type].push(action.pose);
      return updateObject(state, newLists);
    case actionTypes.DUMP_POSE:
      let lists = [...state.lists];
      const deleteIndex = lists[action.type].indexOf(action.pose);
      lists[action.type].splice(deleteIndex, 1);
      return updateObject(state, lists);
    default:
  }
  return state;
};
export default reducer;
