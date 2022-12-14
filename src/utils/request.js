// 基于 axios 封装，网络请求的函数
import axios from 'axios'

// axios.create() 创建一个带配置项的自定义 axios 函数
// myAxios 请求的时候，地址 baseURL + url，然后去请求后台
const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

// 导出 axios 自定义函数
export default myAxios
