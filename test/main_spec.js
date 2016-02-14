var frisby = require('frisby'),
    conf = require('../config');

frisby.create('Get API root')
  .get(conf.apiURL)
  .expectStatus(200)
  .expectHeaderContains("Content-Type", "application/json")
  .expectJSON({ success: true, message: "Hai, I'm the API."})
.toss();
