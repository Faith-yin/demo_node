/*
 * @author: 殷鹏飞
 * @Date: 2020-04-19 18:36:29
 * @information: app
 */
const mongoose = require('mongoose')
const UserController = require('./controller/UserController.js')


// 连接mysql
mongoose.connect(
  'mongodb://root:123456@localhost:3306/demo_node', 
  {useUnifiedTopology: true, useNewUrlParser: true}, 
  (err, res) => {
    if(!err) {
      console.log('数据库连接成功');
      let userController = new UserController()
      
      userController.findAllUser()
    } else {
      console.log('出错了');
    }

})







