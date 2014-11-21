parse2loopback
==============

An example of the manual steps required to convert a loopback generated scaffolding into Parse.com like REST API server

 1. Change from `/api/Users` to `/1/users`
  * `Built-in models REST API` section (http://docs.strongloop.com/display/public/LB/Built-in+models+REST+API) suggests:
    * By default, LoopBack uses `/api` as the URI root for the application REST API.  To change it, set the `apiPath` variable in the application `app.js` file.
    * But there is no such file!
  * Next, `Reference > Project layout reference > server directory > config.json` (http://docs.strongloop.com/display/public/LB/config.json) suggests:
    * Edit the `<project-name>/server/config.json` file because `restApiRoot` controls the `Root URI of REST API`
    * This worked.
 2. Change `node_modules/parse/build/parse-latest.js` to point to localhost for settign up simple tests that will ensure that the Parse JS client will work with our parse-rest-conformant API.

    ```
    // Set the server for Parse to talk to.
    //Parse.serverURL = "https://api.parse.com";
    Parse.serverURL = "http://localhost:3000";
    ```

 3. tbd
