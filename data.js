var weather = require('./Weather.js')
var argv= require('yargs')
.option('location',{
    description:'Location to get the weather for city',
    demand:true,
    type:'string'
})
.help('help')
.argv

weather(argv.location,function (callback) {
    console.log(callback);

})
