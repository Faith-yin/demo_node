/*
 * @author: 殷鹏飞
 * @Date: 2020-04-20 09:36:09
 * @information: user 业务层
 */
const UserDao = require('../dao/UserDao.js')


const userDao = new UserDao()

class UserService {
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:25:49
   * @information: 查询全部
   */
  async findAllUser() {
    let res =  await userDao.findAllUser()
    console.log(res);
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:28:40
   * @information: 添加用户
   */
  async addUser(data) {
    return await userDao.addUser(data)
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:30:42
   * @information: 修改
   */
  async updateUser(data) {
    return await userDao.updateUser(data)
  }

  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-20 09:30:52
   * @information: 删除
   */
  async deleteUser(data) {
    return await userDao.deleteUser(data)
  }


}


module.exports = UserService
