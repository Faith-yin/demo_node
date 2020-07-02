/*
 * @Date: 2020-05-20 16:00:42
 * @information: 封装方法
 */ 
const express = require('express')
const mysql = require('mysql')
const mysqlConfig = require('./mysqlConfig.js')

// 创建express实例
const app = express()

function query(sql, params, callback) {
  // 创建数据库连接对象
  let connection = mysql.createConnection(mysqlConfig)
  // 连接数据库
  connection.connect(err => {
    if(err) {
      console.log('数据库连接失败');
      return;
    }
    console.log('数据库连接成功');
  })
  // 数据操作
  connection.query(sql, params, (err, result) => {
    if(err) {
      console.log('数据操作失败');
      return;
    }
    // 将查询出来的数据返回给回调函数
    callback
  })


}









