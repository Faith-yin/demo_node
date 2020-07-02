/*
 * @author: 殷鹏飞
 * @Date: 2020-04-19 16:45:30
 * @information: 
 */
const mongoose = require('mongoose')


/**
 * @author: 殷鹏飞
 * @Date: 2020-04-19 18:43:50
 * @information: 用户实体类
 */
const user = new mongoose.Schema({
  id: {
    type: Number,
    decription: 'id'
  },
  userId: {
    type: Number,
    decription: '用户id'
  },
  username: {
    type: String,
    decription: '用户名称'
  },
  accountNumber: {
    type: Number,
    decription: '用户账号'
  },
  password: {
    type: [String, Number],
    default: '123456',
    decription: '用户密码'
  },
  sex: {
    type: Number,
    decription: '用户性别：1男，2女'
  },
  birthday: {
    type: String,
    decription: '用户生日'
  },
  createTime: {
    type: Number,
    default: new Date().getTime(),
    decription: '创建时间'
  },
  isDelete: {
    type: Number,
    default: 0,
    decription: '是否删除：0未删除，1已删除'
  },
})

module.exports = mongoose.model('user', user)


