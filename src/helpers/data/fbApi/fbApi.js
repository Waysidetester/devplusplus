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

const updateTrackedItem = (key, item) => new Promise(() => {
  axios.put(`https://devplusplus-fd23c.firebaseio.com/tracker/${key}.json`, item)
    .catch((err) => {
      console.error(err);
    });
});

const addTrackedItem = item => new Promise(() => {
  axios.post(`https://devplusplus-fd23c.firebaseio.com/tracker.json`, item)
    .catch((err) => {
      console.error(err);
    })
})

const deleteTrackedItem = key => new Promise((resolve, reject) => {
  axios.delete(`https://devplusplus-fd23c.firebaseio.com/tracker/${key}.json`)
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    })
  });

export default {
  getFBData,
  updateTrackedItem,
  addTrackedItem,
  deleteTrackedItem,
};
