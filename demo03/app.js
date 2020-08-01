/*
 * @Date: 2020-07-31 16:49:38
 * @information: 入口文件 
 */ 
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

// 引入路由
const heroRouter = require('./routes/hero')


// 使用系统的模块querystring来处理参数
app.use(bodyParser.urlencoded({extended:false}))
// 使用req.body返回的数据就是json格式
app.use(bodyParser.json()) 


app.use('/hero', heroRouter)


// 触发异常处理中间件
app.use((err, req, res, next) => {
	//返回错误信息
	res.status(400).send('somting is wrong !')
})


app.listen('3000', () => {
  console.log(`服务启动了: http://localhost:3000`)
})
