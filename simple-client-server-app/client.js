const axios = require("axios");

function makeItRandom() {
  const length = 8;
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function main() {
  const minute = 1000 * 5;
  let counter = 1;
  const data = { counter };

  setInterval(() => {
    axios
      .post(
        "http://localhost:3000",
        { counter: counter },
        {
          headers: { "X-RANDOM": makeItRandom() },
        }
      )
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );

    counter += 1;
  }, minute);
}

main();
