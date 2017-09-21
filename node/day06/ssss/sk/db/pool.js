var mysql = require('mysql');

var pool = mysql.createPool({
    host:'101.132.64.13',
    port:'3306',
	database:'student',
    user:'root',
    password: 'root'
});
//全局对象pool;
global.pool=pool;
