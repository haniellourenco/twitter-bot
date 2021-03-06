var Twit   = require('twit');       // require the lib
require('dotenv').config()

const randomItem = require('random-item');
var schedule = require('node-schedule');


var Twitter = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60 * 1000,
}); // pass the configuration to the twit

console.log('Este bot está rodando...');

var arr = [ 
            'Bom dia!',
            'Bom dia, rapaziada',
            'Bom dia, galera!',
            'Buenos dias!'
           ];

var j = schedule.scheduleJob({hour: 7, minute: 30}, function(){

    Twitter.post('statuses/update', 
    { 
        status: randomItem (arr) 
    }, 
    function(err, data, response) {
        console.log(data)
    });


});        