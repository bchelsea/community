var express = require('express');
var router = express.Router(); 



FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log(response.authResponse.accessToken);
    }
  });


  