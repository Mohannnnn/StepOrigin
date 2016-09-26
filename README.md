# StepOrigin
JSONP跨域和CORS跨域

1.开启服务器：npm run app<br>
2.实时更新前台js数据：webpack -w<br>
3.在app.js中我把很多的路由都有一个来实现，所以在测试的时候需要更改或者注释某些部分<br>
4.在index.js中有JSONP跨域(只支持get)，CORS跨域(任何请求),在测试某个请求的时候，需要注释掉其他部分。<br>
5.在使用CORS进行跨域请求时<br>
    &nbsp;&nbsp;&nbsp;服务器端需要设置响应头部<br>
    &nbsp;&nbsp;&nbsp;res.header("Access-Control-Allow-Origin", "http://localhost:3001");<br>
    &nbsp;&nbsp;&nbsp;res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");<br>
    &nbsp;&nbsp;&nbsp;res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");<br>
    &nbsp;&nbsp;&nbsp;res.header("X-Powered-By",' 3.2.1');<br>
    &nbsp;&nbsp;&nbsp;res.header("Content-Type", "application/json;charset=utf-8");<br>
    &nbsp;&nbsp;&nbsp;客户端使用监听request.onload来接受响应文本(request.responseText)
