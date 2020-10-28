/*
 * @Date: 2020-10-28 14:12:38
 * @information: 操作
 */
const moment = require('moment')
const axios = require('axios')
const operation = require('../util/operation')



function query(sql, arr, callback) {
  operation(sql, arr, callback).then(res => {
    console.log('success: ',res)
  }).catch(error => {
    console.log('fail: ',error)
  })
}
// query(`select * from image_bg where is_delete = 0`)


function add(sql, val, callback) {
  return operation(sql, val, callback)
}


async function save() {
  let id = 1
  while(id < 952) {
    let url = `https://api.mz-moe.cn/img/img${id}.jpg`,
        time = moment().format('YYYY-MM-DD HH:mm:ss'),
        sql = `insert into image_bg (img_path, create_time) values (?, ?)`
    try {
      await add(sql, [url, time])
      console.log('成功了:', id);
    } catch (error) {
      console.log('失败了:', id, error);
    }
    id ++
  }
}
// save()




function getImage(val) {
  let baseUrl = `https://api.mz-moe.cn/img`
  return axios.get(`${baseUrl}/img${val}.jpg`)
}

