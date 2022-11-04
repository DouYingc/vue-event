// 封装的是具体的接口请求方法
// 每个方法只负责请求一个 URL 地址
import request from '@/utils/request'

// 导出接口方法
export const registerAPI = ({ username, password, repassword }) => {
  // 是一个 Promise 对象(内部包含原生 ajax 请求)
  // return 这个 Promise 对象到逻辑页面，去那边的对 Promise 对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param {*} param0 {username: 用户名, password: 密码 }
 * @returns Promise对象
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
