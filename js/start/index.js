new Vue({
    el: '#friend',
    data() {
        return {}
    },
    methods: {
        /**
         * 跳转登录
         */
        login() {
            $go({
                path: 'login'
            })
        },
        /**
         * 跳转注册
         */
        register() {
            $go({
                path: 'register'
            })
        },
    }
})