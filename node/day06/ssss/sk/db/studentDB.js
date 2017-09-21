
//当前代码必须在db.js之后执行
var pool = global.pool;

if(!pool){
	return;
}
//所有学生信息
function findAllStudent(handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'select * from xk_student';
			connection.query(sql,function(err,results){
				if(err){
					throw err;	
				}else{
					if(err){
						throw err;
					}else{
					handler.call(this,results);						
					}
				//回收
				connection.release();	
				}	
			})
		}
	})
}

//通过id删除
function deleteById(id,handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'delete from xk_student where id = ?';
			connection.query(sql,[id],function(err,results){
				if(err){
					throw err;
				}else{
					handler.call(this,results);
				}
				connection.release();
			})
		}
	})
}
//通过id查找学生
function findById(id,handler){
	pool.getConnection(function(err,connection){
		if(err){
        throw err; 

			throw err;
		}else{
			var sql ='select * from xk_student where id =?';

			connection.query(sql,[id],function(err,results){
				if(err){
					throw err;
				}else{
					handler.call(this,results);
				}
				connection.release();
			})
		}
	})
};
//添加学生
function addStudent(name,gender,birth,handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = "insert into xk_student(name,gender,birth) values(?,?,?)";
			connection.query(sql,[name,gender,birth],function(err,results){
				if(err){
					throw err;
				}else{
					handler.call(this.results);
				}
				connection.release();
			});
		}
	});
}
//修改学生信息
function editStudent(id,name,gender,birth,handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'update xk_student set name=?,gender=?,birth=? where id=?';
			connection.query(sql,[id,name,gender,birth],function(results){
				if (err) {
					throw err;
				}else{
					handler.call(this,handler);
				}
				connection.release();
			}) ;
		}
	});
}




//查找所有的班级信息
function findClasses(handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'select * from xk_clazz';
			connection.query(sql,function(err,results){
				if(err){
					throw err;
				}else{
					handler.call(this,results);
				}
				connection.release();
			});
		}
	});
};



//查找所有的courses信息student
function findCourses(handler){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'select * from xk_course';
			console.log(sql);
			connection.query(sql,function(err,results){
				if(err){
					throw err;
				}else{
					handler.call(this,results);
				}
				connection.release();
			});
		}
	});
}

//暴露接口
module.exports = {
	findAllStudent:findAllStudent,

	//删除
	deleteById:deleteById,
	//查找
	findById:findById,
	//添加
	addStudent:addStudent,
	//修改
	editStudent:editStudent,

	findClasses:findClasses,
	findCourses:findCourses
};

