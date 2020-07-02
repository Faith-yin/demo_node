/*
 * @author: 殷鹏飞
 * @Date: 2020-04-20 09:42:11
 * @information: user 控制层
 */
const UserService = require('../service/UserService.js')


const userService = new UserService()

class UserController {
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:25:49
   * @information: 查询全部
   */
  async findAllUser() {
    return await userService.findAllUser()
  }


  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:53:43
   * @information: 添加用户
   */
  async addUser(data) {
    return await userService.addUser(data)
  }


  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:30:42
   * @information: 修改
   */
  async updateUser(data) {
    return await userService.updateUser(data)
  }


  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:30:52
   * @information: 删除
   */
  async deleteUser(data) {
    return await userService.deleteUser(data)
  }



}


module.exports = UserController
