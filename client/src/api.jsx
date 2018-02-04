import axios from 'axios';

function getOptions() {
  return {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };
}

async function get(url, offline) {
  if (offline) {
    return JSON.parse(localStorage.getItem(url));
  }

  try {
    const res = await axios.get(url, getOptions());
    localStorage.setItem(url, JSON.stringify(res.data));
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

async function post(url, data, withoutToken) {
  if (!withoutToken) {
    try {
      const res = await axios.post(url, data, getOptions());
      return res.data;
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const res = await axios.post(url, data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
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
    get: async offline => get('/user', offline),
    login: async ({ email, password }) => post('/user/login', { email, password }, true),
    register: async (email, password, name) => post('/user/register', { email, password, name }, true),
  },

  poses: {
    get: async offline => get('/poses', offline),
  },
  list: {
    add: async (pose_id, user_id, list_name) => post('/user/addPose', { pose_id, user_id, list_name }),
    remove: async (pose_id, user_id, list_name) => remove(`/user/removePose/${user_id}/${list_name}/${pose_id}`),
  },
};
