import {
  FILL_USER, STORE_POSE, COLLECT_POSE, DUMP_POSE, FILTER_DIFFICULTY, SET_TAG,
} from './actionTypes';

export const storeUser = user => ({ type: FILL_USER, user });
export const storePoses = pose => ({ type: STORE_POSE, pose });

export const removeFromUser = (poseId, listName) => ({ type: DUMP_POSE, poseId, listName });
export const addToUser = (poseId, listName) => ({ type: COLLECT_POSE, poseId, listName });

export const setDifficulty = (difficulty, currentSlide) => ({
  type: FILTER_DIFFICULTY,
  difficulty,
  currentSlide,
});
export const setTag = (tag, currentSlide) => ({
  type: SET_TAG, tag, currentSlide,
});
