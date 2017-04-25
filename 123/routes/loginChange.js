
/**
 * Created by dllo on 17/4/24.
 */
var mysql = require('mysql');
var options = {
    connectionLimit:3,
    user:'root',//连接数据库的用户
    password:'123456',//对应用户的密码
    host:'localhost',//连接数据库的主机名/ip地址
    port:3306,//端口号 默认为:3306
    database:'HTML 5',//需要打开的数据库
    charset:'utf8'//打开数据库的编码格式
};

var pool = mysql.createPool(options);

//创建路由的步骤
//1.引入express
var express = require('express');
//2.通过express 创建路由
var router = express.Router();
//3.路由访问,回调函数
router.post('/',function (req,res) {


    var username = req.body.username;
    var password = req.body.password;
    var login = {
        username:username,
        password:password
    }
    pool.query('select * from login',function (error,results) {
        if(error){
            console.log('查询失败');
            console.log(error);
        }else{
            if(login.username == results[0].username && login.password == results[0].password){
                res.send('登录成功');
                //   username:admin password:123
            }else{
                res.send('登录失败');
            }
        }
    });
    var updateSQL = 'update h161217 SET age = 20 where name="李青"';
    connection.query(updateSQL,function (error) {
        handleError(error,'更新');
    })

});
//4.模块导出 路由
module.exports = router;