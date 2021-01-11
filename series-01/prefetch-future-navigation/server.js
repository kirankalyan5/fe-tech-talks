// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/index-prefetch.html', function(request, response) {
  response.sendFile(__dirname + '/views/index-prefetch.html');
});

app.get('/product-details.html', function(request, response) {
  response.sendFile(__dirname + '/views/product-details.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
