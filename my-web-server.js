var http=require('http');
var server=http.createServer(function(req,resp){
	resp.writeHead(200,{'Content-Type':'text/html'});
	resp.end('<marquee>smashing NOde</marquee>');
});
server.listen(8080,function(){
	console.log('服务已经启动');
});
