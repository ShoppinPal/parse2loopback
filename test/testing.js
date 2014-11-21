var loopback = require('loopback');

// edited local Parse v1.3.0
// line # 1334: Parse.serverURL = "https://api.parse.com";
// replaced with
// Parse.serverURL = "http://localhost:3000";
var Parse = require('parse').Parse;
Parse.initialize('parseAppId','parseJsKey','parseMasterKey'); // junk values, not relevant

describe('User.create', function() {
  it('Create a new user', function (done) {
    /*User.create({email: 'f@b.com', password: 'bar'}, function (err, user) {
      assert(!err);
      assert(user.id);
      assert(user.email);
      done();
    });*/
    var parseUser = new Parse.User();
    parseUser.set('username', 'a@a.com');
    parseUser.set('password', 'a@a.com');
    parseUser.set('email', 'a@a.com');

    return parseUser.signUp(null, {useMasterKey: true})
      .then(function(createdUserObject) {
        console.log('Created username: ' + createdUserObject.get('username'));
        assert(createdUserObject.get('username'));
        done();
      });
  });
});
