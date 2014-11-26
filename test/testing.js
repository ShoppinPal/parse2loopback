//var loopback = require('loopback');
//var helpers = require('../');
var assert = require('assert');

// edited ./node_modules/parse/build/parse-latest.js (local file for Parse v1.3.0)
// line # 1334: Parse.serverURL = "https://api.parse.com";
// replaced with
// Parse.serverURL = "http://localhost:3000";
var Parse = require('parse').Parse;
Parse.initialize('parseAppId','parseJsKey','parseMasterKey'); // junk values, not relevant

describe('User.create', function() {
  it('Create a new user', function (done) {
    var parseUser = new Parse.User();
    var now = Date.now();
    var unique = 'user_'+now+'@test.com';
    console.log(unique);
    parseUser.set('username', unique);
    parseUser.set('password', unique);
    parseUser.set('email', unique);
    //console.log(parseUser);

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
