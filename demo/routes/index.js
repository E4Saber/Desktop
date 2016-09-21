var express = require('express');
var router = express.Router();
var crypto = require('crypto');  //生成散列
//用户对象
var User = require('./../models/user.js');
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title : 'Express' });
});

router.get('/reg', function (req, res) {
  console.log('reg_000000000000');
  res.render('reg', {
    title : 'Register'
  });
});

router.post('/post', function (req, res) {

});

router.get('/u/:user', function (req, res) {

});

router.post('/reg', function(req, res) {

  var errmessage = '';
  if (req.body['password-repeat'] != req.body['password']) {
    errmessage = 'Error  happened';
    console.log(errmessage + "密码不一致");
    res.render('error', {
      title : 'ERROR',
      err : errmessage
    });
  }

  var b = req.body;
  var _user = {
    username : b.username,
    password : b.password
  };

  var user = new User(_user);
  console.log('页面得到的对象：' + user);

  /****** ERROR ********/
  var _es = user.get(user);
  console.log('获取到的 user 对象 ： ' + _es);
  /**************/

  user.save(function (err, user) {
    console.log('save__**************');
    if (err) {
      console.log(err);
      return ;
    }

    console.log('register successfully');
    res.send('register successfully');
  });



/*  //输入检查
  if (req.body['password-repeat'] != req.body['password']) {
    req.flash('error', '两次输入的密码不一致');
    return res.redirect('/reg');
  }

  //生成口令的散列值
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  var newUser = new User({
    name : req.body.username,
    password : password
  });
  //检查用户是否存在
  User.get(newUser.name, function (err, user) {
    if (user) {
      err = 'Username already exists';
    }
    if (err) {
      req.flash('error', err);
      return res.redirect('/reg');
    }
    //用户不存在新增用户
    newUser.save(function (err) {
      if (err) {
        req.flash('error', err);
        return res.redirect('/reg');
      }
      req.session.user = newUser;
      req.flash('success', '注册成功');
      res.redirect('/');
    });
  })*/
});

router.get('/login', function (req, res) {

});

router.post('/doLogin', function (req, res) {

});

router.get('/logout', function (req, res) {

});

router.get('/help', function (req, res) {
  res.render('help', {
    title : 'Help',
    helpinfo : 'Just Waiting The Help',
    headers : req.headers
  });
});

//视图助手： 静态 动态    给所有的视图注册全局变量 无需 每次在调用模板引擎时传递数据对象
//静态视图助手 ： 可以是任何类型的对象，包括接受任意参数的函数，但访问的对象必须与用户请求无关
//动态视图助手 ： 只能是一个函数，不能接受参数，但是可以访问 req 和 res

module.exports = router;
