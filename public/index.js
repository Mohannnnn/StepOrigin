/**
 * Created by 14-7447 on 2016/9/21.
 */
var $ = require('jquery');

/*
    使用jquery的ajax进行跨域，其实也是使用的jsonp跨域的。
*/
//;$(function(){
//
//    function jsonpCallback(data) {
//        console.log('jsonpCallBack:' + data);
//    };
//
//
//    $('#btn').on('click' , function () {
//        var data = {
//            name : $('#name').val(),
//            id   : $('#id').val()
//        };
//        $.ajax({
//            type : 'get',
//            data : data,
//            url  : 'http://localhost:3002/deal',
//            dataType : 'jsonp',
//            cache : 'false',
//            timeout : 5000,
//            //定义jsonp回调函数的名称
//            jsonpCallback:'jsonpCallback',
//            success : function (json) {
//                console.log(json);
//            },
//            error :function (error) {
//                console.log('error' + textStatus );
//            }
//        });
//    });
//
//})
//
///*
//* 使用原生的js，script标签实现跨域，只支持get方法
//* */
//;$(function() {
//
//    function jsonpCallback (data) {
//        console.log(data);
//    }
//    document.querySelector('#btn').onclick = function () {
//        var name = document.querySelector('#name').value;
//        var id   = document.querySelector('#id').value;
//
//        var script = document.createElement('script');
//
//
//        script.src = 'http://localhost:3002/deal?jsonpCallback=jsonpCallback&name=' + name + '&id=' + id;
//
//        document.body.insertBefore(script,document.body.lastChild);
//
//    }
//})

/*
* 使用CORS跨域
* */

//$(function () {
//
//    $('#btn').on('click' , function () {
//        var data = {
//            name : $('#name').val(),
//            id   : $('#id').val()
//        };
//        $.ajax({
//            type : 'post',
//            data : data,
//            url  : 'http://localhost:3002/deal',
//            dataType : 'json',
//            cache : 'false',
//            timeout : 5000,
//            success : function (data) {
//                console.log(data);
//            },
//            error :function (error) {
//                console.log('error' + textStatus );
//            }
//        });
//    });
//})

/*
* 使用原生的js实现CORS跨域
* */
$(function () {

    function createCORSRequest (method,url) {
        var xhr = new XMLHttpRequest();

        if ("withCredentials" in xhr) {
            xhr.open(method,url,true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method,url);
        } else {
            xhr = null;
        }
        return xhr;
    }

    document.querySelector('#btn').onclick = function () {

        var name = document.querySelector('#name').value;
        var id = document.querySelector('#id').value;

        var request = createCORSRequest("get","http://localhost:3002/deal?name=" + name + '&id=' + id);


        if(request) {
            request.onload = function (){
                //对request.responseText进行处理
                console.log(request.responseText);
            };
            request.onerror = function () {
                alert('Woops, there was an error making the request.');
            };
            request.send(null);
        }
    }



})