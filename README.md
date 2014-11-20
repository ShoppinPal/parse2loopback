parse2loopback
==============

An example of the manual steps required to convert a loopback generated scaffolding into Parse.com like REST API server

 1. Change from `/api/Users` to `/1/users`
  * `Built-in models REST API` section (http://docs.strongloop.com/display/public/LB/Built-in+models+REST+API) suggests:
    * By default, LoopBack uses `/api` as the URI root for the application REST API.  To change it, set the `apiPath` variable in the application `app.js` file.
    * But there is no such file!
  * Next, `Reference > Project layout reference > server directory > config.json` (http://docs.strongloop.com/display/public/LB/config.json) suggests:
    * editing the `<project-name>/server/config.json` file because `restApiRoot` controls the `Root URI of REST API`
    * This worked.