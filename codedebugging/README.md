# CodeDebugging

Code debugging built with NodeJs

## Resolve code

- 1. change `env` to `.env` then change to my personal info

- 2. src/config/index.js

```js
// change
module.exports = { config };

// to
module.exports = config;
```

- 3. src/services/authService.js

```js
// change
module.exports = { redirectUri: redirectUri };
// to
module.exports = redirectUri;

// in app.js change
const authService = require("./src/services/authService");

// to
const redirectUri = require("./src/services/authService");
// and line 10 change to
const auth = redirectUri();
```

- 4. src/services/userInfoService.js

```js
// change
url: `${config.apiUrl}/users`;
module.export = getUserInfo;

// to
url: `${config.apiUrl}/user`;
module.exports = getUserInfo;

// in src/services/authCallbackService.js

//change
const UserServices = require("./userInfoService");
 .then((res) => resp.data["accessToken"])
const user = UserServices.getUserInfo(accessToken);

// to
const getUserInfo = require("./userInfoService");
 .then((res) => res.data.access_token)
getUserInfo(accessToken).then((user)=>{/* ...rest */});
```
