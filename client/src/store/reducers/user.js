import * as actionTypes from '../actions';
import { updateObject, updateList, addToInnerList, makeNewList } from '../utility';

const initialState = {
  name: '',
  difficulty: '',
  lists: {},
};
const reducer = (state = initialState, action) => {
  let setState, lists;
  let listOfTags = {};
  const { user, listName, poses, pose_id, type } = action;
  const { FILL_USER, LOG_OUT, COLLECT_POSE, DUMP_POSE } = actionTypes;

  switch (type) {
    case FILL_USER:
      setState = user;
      return updateObject(state, setState);
    case LOG_OUT:
      setState = initialState;
      return updateObject(state, setState);
    case COLLECT_POSE:
      listOfTags = state.lists[listName]
        ? addToInnerList(state.lists[listName], listName, pose_id)
        : makeNewList(listName, pose_id);

      return updateList(state, state.lists, listOfTags);
    case DUMP_POSE:
      listOfTags[listName] = [...state.lists[listName]];
      const deleteIndex = listOfTags[listName].indexOf(pose_id);
      listOfTags[listName].splice(deleteIndex, 1);
      return updateList(state, state.lists, listOfTags);
    default:
  }
  return state;
};
export default reducer;
