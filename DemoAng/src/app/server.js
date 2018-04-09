var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var x = {"stid" : "1","stName":"ABC","stCourse":"XYZ"};
    
   res.send(JSON.stringify(x));
})

var server = app.listen(5000, function () {
    console.log('server Started')
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})