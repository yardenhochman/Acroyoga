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

export default {
  user: {
    get: async () => get('/user')
  },

  poses: {
    get: async () => get('/poses')
  },
};
