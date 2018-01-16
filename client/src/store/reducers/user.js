import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
  name: 'guest',
  email: '',
  username: '',
  difficulty: '',
  //lists: [],
};
const reducer = (state = initialState, action) => {
  let setState;
  switch (action.type) {
    case actionTypes.FILL_USER:
      setState = action.user;
      return updateObject(state, setState);
    case actionTypes.UPDATE_USER:
      setState = action.user;
      return updateObject(state, setState);
  }
  return state;
};
export default reducer;
