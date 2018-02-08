import { FILL_USER, STORE_POSE, COLLECT_POSE, DUMP_POSE, FILTER_DIFFICULTY, SET_TAG } from './actionTypes';
export const storeUser = user => ({ type: FILL_USER, user });
export const store_Poses = pose => ({ type: STORE_POSE, pose });

export const remove_from_user = (pose_id, listName) => ({ type: DUMP_POSE, pose_id, listName });
export const add_to_user = (pose_id, listName) => ({ type: COLLECT_POSE, pose_id, listName });

export const set_difficulty = (difficulty, currentSlide) => ({
        type: FILTER_DIFFICULTY,
        difficulty,
        currentSlide,
});
export const set_tag = (tag, currentSlide) => ({
  type: SET_TAG, tag, currentSlide
})