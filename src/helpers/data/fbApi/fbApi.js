import axios from 'axios';

const getFBData = () => new Promise((resolve, reject) => {
  axios.get(`https://devplusplus-fd23c.firebaseio.com/tracker.json`)
    .then((res) => {
      resolve(res.data);
    })
    .catch(err => reject(err));
});

export default { getFBData };
