import axios from 'axios';

const getFBData = () => new Promise((resolve, reject) => {
  axios.get(`https://devplusplus-fd23c.firebaseio.com/tracker.json`)
    .then((res) => {
      const items = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          items.push(res.data[key]);
        });
        resolve(items);
      }
    })
    
    .catch(err => reject(err));
});

export default { getFBData };
