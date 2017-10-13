var pool = require('./pool');

module.exports = {
  //所有类型
    findAllType(){
       var sql = "select * from tbl_exam_subjecttype";
       return pool.execute(sql);
    },
    //难易程度
    findAllComplexity(){
       var sql = "select * from tbl_exam_subjectlevel";
       return pool.execute(sql);
    },
    //方向
    findAllDirection(){
       var sql = "select * from tbl_exam_epartment";
       return pool.execute(sql);
    },
    //知识点
    findAllKnowledge(){
       var sql = "select * from tbl_exam_topic";
       return pool.execute(sql);
    },
    //查找所有题目
    findAllSubject(){
       var sql = "select * from tbl_exam_subject";
       return pool.execute(sql);
    },
    //id查找题目
    findSubjectById(ids){
      var sql="select * from tbl_exam_subject where department_id='"+ids[2]+"' and subjectLevel_id='"+ids[1]+"' and subjectType_id='"+ids[0]+"' and topic_id="+ids[3];
      return pool.execute(sql); 
    },
    //审核通过or不通过
    passTheAudit(state,id){
      var sql="update tbl_exam_subject set checkState='"+state+"' where id="+id;
      return pool.execute(sql);
    },
    //删除题目
    delete(id){
      var sql="delete from tbl_exam_subject where id="+id;
      return pool.execute(sql);
    },
    //获取正确答案
    findRightAnswer(id){
      var sql="select * from tbl_exam_choice where subject_id="+id;
      return pool.execute(sql);
    },
    //模糊查询
    query(keys){
      var sql="select * from tbl_exam_subject where stem like '%"+keys+"%'";
      return pool.execute(sql);
    },
    //id查询
    findById(id){
      var sql="select * from tbl_exam_subject where id="+id;
       return pool.execute(sql);
    },
    //添加题目
    addItem(obj){
      var sql="insert into tbl_exam_subject values(null,'"+obj.analysis+"','"+obj.answer+"',null,'"+obj.stem+"',null,'"+obj.department_id+"','"+obj.subjectLevel_id+"','"+obj.subjectType_id+"','"+obj.topic_id+"',null,null)";
      return pool.execute(sql);
    }

}
