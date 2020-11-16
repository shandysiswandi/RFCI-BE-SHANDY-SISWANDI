const axios = require("axios");
const config = require("../config");

function getUserInfo(token) {
  console.log(`${config.apiUrl}/user`);
  return;
  axios({
    method: "get",
    url: `${config.apiUrl}/user`,
    headers: {
      Authorization: "bearer " + token,
    },
  }).then((response) => response.data);
}

module.exports = getUserInfo;
