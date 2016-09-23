/**
 * Created by 14-7447 on 2016/9/21.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

//post请求需要用到中间件body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//jsonp跨域请求
//app.get('/deal' , function (req , res) {
//   console.log(req.query.jsonpCallback);
//
//    //var data = {
//    //    name : req.query.name,
//    //    id   : req.query.id,
//    //    json : 'kuayu'
//    //};
//    var json = {
//        "name" : req.query.name,
//        "id"  : req.query.id
//    }
//    var data = req.query.jsonpCallback + '('+ JSON.stringify(json) + ')';
//    res.send(data);
//    res.end();
//});

//CORS跨域
app.get('/deal' , function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    var data = {
        name : req.query.name,
        id   : req.query.id
    };
    console.log(data);

    res.send(data);
    res.end();

})
var server = app.listen(3002,function(){

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://", host, port)
});

var server = app.listen(3001,function(){

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://", host, port)
});