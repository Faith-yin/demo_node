/*
 * @author: 殷鹏飞
 * @Date: 2020-04-16 14:49:23
 * @information: app
 */
const express = require('express')
const mysql = require('mysql')
const mysqlConfig = require('./mysqlConfig.js')
// 创建express实例
const app = express()

// mysql语句
let sqlFind = "select * from t_user"

// 端口号
let portNumber = 4000


// 创建数据库连接对象
let db = mysql.createConnection(mysqlConfig)

// 连接数据库
db.connect(err => {
  if(err) {
    console.log('数据库连接失败')
  }else {
    console.log('数据库连接成功')
  }
})

// 数据库的增删改查操作
db.query(sqlFind, [], (err, result) => {
  if(err) {
    console.log('操作失败: ',err)
  } else {
    console.log('操作成功')
    console.log('监听端口号:', `http://localhost:${portNumber}`)
    // 把查询的内容输出
    app.get('/', (req, res) => {
      res.send(result) //返回给浏览器一个json对象
      // res.write(result) //返回给浏览器一个字符串
    })
  }
})

// 关闭数据库连接
db.end()
// 设置监听端口号, 开启服务
app.listen(portNumber)

