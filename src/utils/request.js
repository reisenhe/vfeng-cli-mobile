import axios from 'axios';
import get from 'lodash/get';

// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 20000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
    const status = get(error, 'response.status');
    switch (status) {
        /* eslint-disable no-param-reassign */
        case 400: error.message = '请求错误'; break;
        case 401: error.message = '未授权，请登录'; break;
        case 403: error.message = '拒绝访问'; break;
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
        case 408: error.message = '请求超时'; break;
        case 500: error.message = '服务器内部错误'; break;
        case 501: error.message = '服务未实现'; break;
        case 502: error.message = '网关错误'; break;
        case 503: error.message = '服务不可用'; break;
        case 504: error.message = '网关超时'; break;
        case 505: error.message = 'HTTP版本不受支持'; break;
        default: break;
        /* eslint-disabled */
    }
    return Promise.reject(error);
};

request.interceptors.response.use((response) => {
    const dataAxios = response.data;
    return dataAxios;
}, errorHandler)

export default request;