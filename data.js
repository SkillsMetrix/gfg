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
        callback('Its ' + body.main.temp + ' in ' + body.name);
        
    }
})
}

-------

    var weather = require('./Weather.js')
var argv= require('yargs')
.option('location',{
    description:'Location to get the weather for city',
    demand:true,
    alias:'l',
    type:'string'
})
.help('help')
.argv

weather(argv.l,function (callback) {
    console.log(callback);

})
