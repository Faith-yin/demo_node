/*
 * @Date: 2020-07-31 17:14:40
 * @information: 数据库操作方法
 */ 
const express = require('express')
const mysql = require('mysql')
const sqlConfig = require('../config/sql_config')

const app = express()

function query(sql, params, callback) {
  // 返回Promise，优化异步
  return new Promise((resolve, reject) => {
    // 创建数据库连接对象
    let connection = mysql.createConnection(sqlConfig)
    // 连接数据库
    connection.connect(err => {
      if(err) {
        reject('数据库连接失败')
      }
    })
    // 数据操作
    connection.query(sql, params, (err, result) => {
      if(err) {
        // console.log(`数据操作失败，参考: `, err.sqlMessage)
        reject(`数据操作失败，参考信息: ${err.sqlMessage}`)
      }else {
        callback && callback(result)
        resolve(result)
      }
    })
    // 关闭连接
    connection.end()

  })
}


module.exports = query



