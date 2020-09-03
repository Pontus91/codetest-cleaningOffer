const request = ({ method, headers, uri, data }) =>
  fetch(uri, {
    method,
    headers,
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });

export default request;
