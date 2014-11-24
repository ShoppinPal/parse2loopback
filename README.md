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
 2. Change `node_modules/parse/build/parse-latest.js` to point at `localhost:3000` for setting up tests that will ensure that the Parse JS client will work with our parse-rest-conformant API.

    ```
    // Set the server for Parse to talk to.
    //Parse.serverURL = "https://api.parse.com";
    Parse.serverURL = "http://localhost:3000";
    ```

 3. Add a test to see if we can create users w/ parse js client:

    ```
    var Parse = require('parse').Parse;
    Parse.initialize('parseAppId','parseJsKey','parseMasterKey'); // junk values, not relevant
    
    describe('User.create', function() {
      it('Create a new user', function (done) {
        var parseUser = new Parse.User();
        parseUser.set('username', 'a@a.com');
        parseUser.set('password', 'a@a.com');
        parseUser.set('email', 'a@a.com');
    
        return parseUser.signUp(null, {useMasterKey: true})
          .then(function(createdUserObject) {
            console.log('Created username: ' + createdUserObject.get('username'));
            assert(createdUserObject.get('username'));
            done();
          },
          function(error){
            done(new Error(JSON.stringify(error,null,2)));
          });
      });
    });
    ```

 4. Parse uses `text/plain` in order to

    > // avoid pre-flight.

    But we need to use `application/json` in order to work with Loopback.

 5. TBD
