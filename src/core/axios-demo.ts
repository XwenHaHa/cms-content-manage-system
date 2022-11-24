import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res, 'res')
})

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 'Xwen',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post('/post', {
    data: {
      name: 'Xwen',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// axios
//   .all([
//     axios.get('/get', {
//       params: {
//         name: 'Xwen',
//         age: 18
//       }
//     }),
//     axios.post('/post', {
//       data: {
//         name: 'Xwen',
//         age: 18
//       }
//     })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })

axios.interceptors.request.use(
  (config) => {
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送失败')
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log('响应成功返回的数据')
    return res
  },
  (err) => {
    console.log('服务器发生错误')
    return err
  }
)
