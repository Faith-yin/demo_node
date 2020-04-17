/*
 * @author: 殷鹏飞
 * @Date: 2020-04-17 09:24:35
 * @information: http使用
 */
const http = require('http')


// res.writeHead(statusCode[, statusMessage][, headers]): 该方法会发送一个响应头给客户端.  第一个参数作为状态码, 最后一个参数 headers 是响应头对象。 第二个参数 statusMessage 是可选的状态描述。
// res.write(chunk[, encoding][, callback]): 该方法会发送一块响应主体。 它可被多次调用，以便提供连续的响应主体片段。第一个参数是一个字符串或一个 Buffer 字节流, 如果是字符串的话, 第二个参数指定如何将它编码成一个字节流 (默认为 utf-8).  最后一个参数这里先不考虑.
// res.end([data][, encoding][, callback]): 该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。每次响应都必须调用这个方法来结束请求, 否则请求会被一直挂起.  如果传入 data 参数, 相当于调用 res.write(data, encoding).


// 创建http服务器
let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'})
  res.write("Hello World");
  res.end();
})

// 给 Web 服务器绑定一个端口
server.listen(5000, () => {
  console.log('正在监听 5000 端口...')
})
