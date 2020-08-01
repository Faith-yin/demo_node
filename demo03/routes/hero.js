/*
 * @Date: 2020-07-31 16:55:45
 * @information: hero路由模块
 */ 
const moment = require('moment')
const express = require('express')
const router = express.Router()
const operation = require('../utils/operation')
const returnMsg = require('../utils/return_msg')

router.use('/', (req, res, next) => {
  // console.log('hero路由拦截器')
  next()
})

// 查询全部信息
router.get('/show', async (req, res) => {
  let sql = `select * from hero where isdelete = 0`
  let result = await operation(sql, [])
  res.send(returnMsg('CODE_SUCCESS', 'MSG_SUCCESS', result))
})

// 添加数据
router.post('/add', async (req, res) => {
  let sql1 = `insert into hero (username, category, line, createTime) values (?, ?, ?, ?)`
  let sql2 = `select * from hero where isdelete = 0 and username = ?`
  //用req.body获取post数据，需要装body-parser中间件
  let {username, category, line} = req.body
  // 根据username查询是否已存在
  let result2 = await operation(sql2, [username])
  if(result2.length) {
    res.send(returnMsg('CODE_FAIL_DATA', 'MSG_FAIL_FIND'))
    return;
  }
  if(!username || !category || !line) {
    res.send(returnMsg('CODE_FAIL_PARAMS', 'MSG_FAIL_PARAMS'))
    return;
  }
  let result1 = await operation(sql, [username, category, line, moment().format('YYYY-MM-DD HH:mm:ss')])
  res.send(returnMsg('CODE_SUCCESS', 'MSG_SUCCESS_ADD', result1))
})

// 根据名称查询
router.post('/findByUsername', async (req, res) => {
  let sql = `select * from hero where isdelete = 0 and username = ?`
  let {username} = req.body
  if(!username) {
    res.send(returnMsg('CODE_FAIL_PARAMS', 'MSG_FAIL_PARAMS'))
    return;
  }
  let result = await operation(sql, [username])
  res.send(returnMsg('CODE_SUCCESS', 'MSG_SUCCESS', result))
})





module.exports = router




