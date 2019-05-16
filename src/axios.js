import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {// 配置请求参数
    ...config.params, // 解构赋值，不覆盖前面的。
    appkey: 'huangruitian_1556682866713'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
