var weather = require('./Weather.js')
var location = require('./location.js')
var argv = require('yargs').option('location', {
    description: 'Location to get the weather for city',
    demand: false,
    alias: 'l',
    type: 'string'
}).help('help').argv

if (typeof argv.l === 'string' && argv.l.length > 0) {
    console.log('Location Recieved from client');
    weather(argv.l, function (callback) {
        console.log(callback);

    })
} else {
    console.log('No City Found....  detecting the location!!!!!!!!!!!');
    location(function (location) {
        if (location) {
            weather(location.city, function (callback) {
                console.log(callback);
            })
        }
    })
}
----


 var request = require('request')

var URL = 'http://ipinfo.io'
module.exports = function (callback) {

    request({
        url: URL,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('unable to find location');

        } else {
            callback(body);

        }
    })
}



----
 var request = require('request')


module.exports= function(location,callback){
 var URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric`

request({
    url: URL,
    json: true
}, function(error,response,body){
    if(error){
        callback('something went wrong');
        
    }else {
        callback(`Its  ${body.main.temp}  and humidity ${body.main.humidity}  in ${body.name}`);
        
    }
})
}
