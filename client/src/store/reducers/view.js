import * as actionTypes from '../actions';
import { updateObject } from '../utility';
const initialState = {
  mode: 'random',
  loaded: false,
  user: '',
};

const reducer = (state = initialState, action) => {
  let setState;
  switch (action.type) {
    case actionTypes.SETMODE:
      setState = { mode: action.set };
      return updateObject(state, setState);
    case actionTypes.LOADED:
      setState = { loaded: true };
      return updateObject(state, setState);
    case actionTypes.RELOAD:
      setState = { loaded: false };
      return updateObject(state, setState);
  }
  return state;
};

export default reducer;

/* const updatedState = {
  ingredients: updatedIngredients,
  totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
};
return updateObject(state, updatedState);
 */
