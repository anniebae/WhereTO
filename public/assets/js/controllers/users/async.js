var URL = 'https://where-to.firebaseio.com/';
var ref = new Firebase(URL);

ref.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData);
  } else {
    console.log("Client unauthenticated.");
  }
});