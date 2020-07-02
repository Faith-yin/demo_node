/*
 * @author: 殷鹏飞
 * @Date: 2020-04-20 09:23:10
 * @information: user dao 层
 */
// const model = require('../config/model.config')

const userModel = require('../model/User.js')

// const userModel = user

class UserDao {
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:25:49
   * @information: 查询全部
   */
  async findAllUser() {
    return await userModel.find()
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:28:40
   * @information: 添加用户
   */
  async addUser(data) {
    return await userModel.save(data)
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:30:42
   * @information: 修改
   */
  async updateUser(data) {
    return await userModel.update(data)
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:30:52
   * @information: 删除
   */
  async deleteUser(data) {
    return await userModel.remove(data)
  }


}


module.exports = UserDao

