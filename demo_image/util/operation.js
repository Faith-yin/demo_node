/*
 * @Date: 2020-10-28 13:57:39
 * @information: 公共方法
 */
const sqlConfig = require('../config/sql_config')
const express = require('express')
const mysql = require('mysql')

const app = express()

function operation(sql, params, callback) {
  return new Promise((resolve, reject) => {
    // 创建数据库连接对象
    let connection = mysql.createConnection(sqlConfig)
    connection.connect(error => {
      if(error) {
        reject(`数据库连接失败`)
      }
    })
    // 数据操作
    connection.query(sql, params, (error, result) => {
      if(error) {
        reject(`数据操作失败，参考信息: ${error}`)
      }else {
        callback && callback(result)
        resolve(result)
      }
    })
    // 关闭连接
    connection.end()
  })
}

module.exports = operation