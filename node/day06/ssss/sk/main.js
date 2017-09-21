require('./db/pool');
var studentDB = require('./db/studentDB');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
/*
studentDB.deleteById(5,function(results){
    console.log(results);
});
*/

var serve = http.createServer(function(req,resp){
  //获取需要的数据
    var id = +querystring.parse(url.parse(req.url).query).id ;
    var name = querystring.parse(url.parse(req.url).query).name;
    var gender = querystring.parse(url.parse(req.url).query).gender;
    var birth = querystring.parse(url.parse(req.url).query).birth;

    resp.writeHead(200,'ok',{'content-type':'text/plain;charset=utf-8','Access-Control-Allow-Origin':'*'});
    var pathname = url.parse(req.url).pathname;
    var method = req.method;
    
    switch(pathname){
        //所有学生信息
        case '/students':
            studentDB.findAllStudent(function(results){
                resp.end(JSON.stringify(results));
                //resp.end('1');
            });
            break;
            //添加学生信息
        case '/students/save':
            studentDB.addStudent(name,gender,birth,function(results){
                console.log(results);
                resp.end(JSON.stringify(results));
            });
            break;
            //修改学生信息
        case '/students/edit':
            studentDB.editStudent(id,name,gender,birth,function(results){
                resp.end(JSON.stringify(results));
            });
            break;
            //删除学生信息
        case '/students/deletById':
        console.log(typeof id);
            studentDB.deleteById(function(id,results){
                resp.send(JSON.stringify(results));
            });
            break;

        case '/classes':
            studentDB.findClasses(function(results){
                //console.log(results);
                resp.end(JSON.stringify(results));
            });
            break;
        case '/courses':
            studentDB.findCourses(function(results){
               // console.log(results);
                resp.end(JSON.stringify(results));
            });
            break;
        default:
    }
});
serve.listen(8080,function(){
    console.log('端口开启 ')
})
