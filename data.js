var request = require('request')

var URL='https://api.openweathermap.org/data/2.5/weather?q=London&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric'

request({
    url: URL,
    json: true
}, function(error,response,body){
    if(error){
        console.log('something went wrong');
        
    }else {
        console.log('Its ' + body.main.temp + ' in ' + body.name);
        
    }
})
