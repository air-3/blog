import Vue from 'vue'
import axios from 'axios'

// axios请求地址
// axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.baseURL = 'http://www.houshisong.cn/api/v1'

Vue.prototype.$http = axios
