import axios from 'axios';

function getOptions() {
  return {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };
}

async function get(url) {
  try {
    const res = await axios.get(url, getOptions());
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

async function post(url, data) {
  try {
    const res = await axios.post(url, data, getOptions());
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

async function remove(url) {
  try {
    const res = await axios.delete(url, getOptions());
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export default {
  user: {
    get: async () => get('/user'),
  },

  poses: {
    get: async () => get('/poses'),
  },
  list: {
    add: async (pose_id, user_id, list_name) => post('/user/addPose', { pose_id, user_id, list_name }),
    remove: async (pose_id, user_id, list_name) => remove(`/user/removePose/${user_id}/${list_name}/${pose_id}`),
  },
};
