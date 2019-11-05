// const API_BASE_URL = "http://192.168.1.126:8099/friend" //线上-测试
const APIROOT = 'http://114.55.170.174/zbang/api/';
const APPID = ''
const REDIRECT_URI = "http://china.gzytbz.com" //授权回调地址
const TOKEN_KEY = JSON.parse(localStorage.getItem("token"))
console.log('TOKEN_KEY', TOKEN_KEY)
const HISTORY_KEY = 'History-Key'
// 配置axios
const axiosConfig = {
    baseURL: APIROOT,
    timeout: 3000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'token': TOKEN_KEY
    },

}
// 创建实例对象
const instance = axios.create(axiosConfig);


// 访问后端转换
function request(val) {
    return instance(val);
}

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("发送请求", config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.status == 200) {
        if (response.data.code == 200) {
            return response.data;
        } else if (response.data.code == 503) {
            $go({
                path: 'login'
            })
            vant.Toast.fail(response.data.msg);
        } else {
            vant.Toast.fail(response.data.msg);
        }
    } else {
        vant.Toast.fail('请求失败');
    }
}, function (error) {
    return Promise.reject(error);
});