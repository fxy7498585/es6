require('babel-polyfill');
var express=require('express');
var route=express.Router();
var typeDB=require('../db/typeDB');
// let Student=require('../model/Student');

//所有类型
route.get('/findAllType',(req,resp)=>{
	typeDB.findAllType().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//难易程度
route.get('/findAllComplexity',(req,resp)=>{
	typeDB.findAllComplexity().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
 //方向
route.get('/findAllDirection',(req,resp)=>{
	typeDB.findAllDirection().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//知识点
route.get('/findAllKnowledge',(req,resp)=>{
	typeDB.findAllKnowledge().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//查找所有题目
route.get('/findAllSubject',(req,resp)=>{
	typeDB.findAllSubject().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//
route.get('/findSubjectById',(req,resp)=>{
	ids=req.query.ids;
	console.log(ids);
	// ids=['1','1','3','1']
	typeDB.findSubjectById(ids).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//通过or不通过
route.get('/passTheAudit',(req,resp)=>{
	var state=req.query.state;
	var id=req.query.id;
	typeDB.passTheAudit(state,id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//删除题目
route.get('/delete',(req,resp)=>{
	var id=req.query.id;
	console.log(id);
	typeDB.delete(id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//查找正确答案
route.get('/findRightAnswer',(req,resp)=>{
	typeDB.findRightAnswer(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//模糊查询
route.get('/query/:keys',(req,resp)=>{
	typeDB.query(req.params.keys).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//id查询
route.get('/findById',(req,resp)=>{
	typeDB.findById(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});

route.get('/addItem',(req,resp)=>{
	console.log(1);
	// obj={
	// 	analysis:'A',
	// 	answer:'aaa',
	// 	stem:'html',
	// 	department_id:1,
	// 	subjectLevel_id:1,
	// 	subjectType_id:1,
	// 	topic_id:1
	// };
	obj=req.query;
	typeDB.addItem(obj).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});




module.exports=route;