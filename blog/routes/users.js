
var express = require('express');
var router = express.Router();

/* GET users listing. 
*  
*  app.js 中注册路由配置代码 app.use('/users', users);
*
*  所以在请求用户的任何路径前都要添加 /users 开始；
*/
router.get('/', function(req, res, next) {
    
    //模拟用户数组数据
    var user_arr = [];
    for(var i = 0 ; i < 10 ; i++){
        user_arr.push({'id':i, 'realname': '姓名-' + i , 'username' : 'username-' + i });
    }

    //对应userIndex.html
    res.render('userIndex', { content: '您当前现在在用户主页！' ,user_arr:user_arr});

});

module.exports = router;
