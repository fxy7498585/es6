//var fs=require('fs');
//var data=fs.readFileSync('index.js');
//console.log(data);
//console.log(data.toString());
// var fs=require('fs');
// fs.readFile('index.js',function(err,data){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(data.toString());
// });
// console.log('YES');
// var fs=require('fs');
// fs.readFile('index.js',function(erro,data){
// 	if(erro){
// 		throw erro;
// 	}
// 	console.log(data.toString());
// });
// console.log('no');
// var events=require('events');
// var eventEmitter=new events.EventEmitter();
// var connectHandler=function connected(){
// 	console.log('success');
// 	eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection',connectHandler);
// eventEmitter.on('data_received',function(){
// 	console.log('data success');
// });
// eventEmitter.emit('connection');
// console.log('jie su ');
var events=require('events');
var eventEmitter=new events.EventEmitter();

var eventHandler=function connected(){
	console.log('success');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
	console.log('data success');
});
eventEmitter.emit('connection');
console.log('yes');
