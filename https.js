import axios from "axios";

const instance = axios.create({
    baseURL: 'http://172.16.116.232:8080',
    timeout: 10000
})

instance.interceptors.response.use(response => {
    return response
})

// instance.interceptors.request.use(config=>{
//     config.headers['Authorization']='Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjM3MDhlODdhLWVhNjktNGY5OS04YWI0LTMzMDE5YmE2MzBlNiJ9.SlAzBQCDVew2x7jI2fQJTaQiIfImfYC2oEHtfL1ajeLtqiG-4R8e7IEaXwLseRficlK_j9VUWzoB5DKteNri3w'
//     return config
// })

export default instance
