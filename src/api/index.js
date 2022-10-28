// 封装的是具体的接口请求方法
// 每个方法只负责请求一个 URL 地址
import request from '@/utils/request'

// 导出接口方法
export const registerAPI = () => {
  // 是一个 Promise 对象(内部包含原生 ajax 请求)
  // return 这个 Promise 对象到逻辑页面，去那边的对 Promise 对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'douying123',
      password: '123321',
      repassword: '123321'
    }
  })
}
