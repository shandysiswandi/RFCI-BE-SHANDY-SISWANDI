const axios = require("axios");
const config = require("../config");

function getUserInfo(token) {
  return axios
    .get(`${config.apiUrl}/user`, {
      headers: { Authorization: `bearer ${token}` },
    })
    .then((response) => response.data);
}

module.exports = getUserInfo;
