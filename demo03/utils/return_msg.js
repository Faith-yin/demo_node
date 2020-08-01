/*
 * @Date: 2020-07-31 18:52:02
 * @information: 返参封装
 */ 
const code = require('../config/code')
const msg = require('../config/message')

function returnMsg(statusCode, message, result) {
  return {
    statusCode: code[statusCode] || 0,
    message: msg[message] || '未知信息', 
    result: result || null,
  }
}


module.exports = returnMsg
