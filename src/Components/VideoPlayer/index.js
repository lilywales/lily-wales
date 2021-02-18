import React, { Component } from "react";
import Vimeo, { Vimeo } from "vimeo";

//BELOW BITS IN BRACKETS ARE {client_id}", "{client_secret}", "{access_token}

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("{f3cc3f6e648eec7cdc8972d944161cff3f6859b3}", "{u3JA/v3Ix9cj+1ATkalLkdBW3xsu9wo6yQTscUdJVs0bzG4xn3NjoRdTeZlWqoq4fE5tgvL5rbQB4360Plisgl5X0B6CIGnGpNxjPvwCNLZgo2oWVQ3bUPgr/uCHzswl}", "{c2c2b7f166da2bd19ff40fd4fc8693f0}");

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
})

// BELOW IS RANDOM COPY AND PASTING

// `scope` is an array of permissions your token needs to access. You
// can read more at https://developer.vimeo.com/api/authentication#supported-scopes
client.generateClientCredentials(scope, function (err, response) {
    if (err) {
      throw err;
    }
  
    var token = response.access_token;
  
    // Other useful information is included alongside the access token,
    // which you can dump out to see, or visit our API documentation.
    //
    // We include the final scopes granted to the token. This is
    // important because the user, or API, might revoke scopes during
    // the authentication process.
    var scopes = response.scope;
  });

  var url = client.buildAuthorizationEndpoint(redirect_uri, scopes, state)
  // `redirect_uri` must be provided, and must match your configured URI.
client.accessToken(code, redirect_uri, function (err, response) {
    if (err) {
      return response.end("error\n" + err);
    }
  
    if (response.access_token) {
      // At this state the code has been successfully exchanged for an
      // access token
      client.setAccessToken(response.access_token);
  
      // Other useful information is included alongside the access token,
      // which you can dump out to see, or visit our API documentation.
      //
      // We include the final scopes granted to the token. This is
      // important because the user, or API, might revoke scopes during
      // the authentication process.
      var scopes = response.scope;
  
      // We also include the full user response of the newly
      // authenticated user.
      var user = response.user;
    }
  });