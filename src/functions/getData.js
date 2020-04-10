import axios from 'axios';

// get data
function getData() {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: '/api/hello',
      params: {},
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default getData;
