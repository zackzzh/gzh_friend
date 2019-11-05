new Vue({
    el: '#friend',
    data() {
        return {
            form: {
                userName: '',
                password: ''
            }
        }
    },
    methods: {
        /**
         * 跳转注册
         */
        register() {
            $go({
                path: 'register'
            })
        },

        /**
         * 跳转忘记密码
         */
        change_password() {
            $go({
                path: 'change_password'
            })
        },
        /**
         * 登录
         */
        confirm() {
            if (this.form.userName.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请输入账号',
                });
                return
            }
            if (this.form.password.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请输入密码',
                });
                return
            }
            $api.login(this.form).then((res) => {
                if (res.code == 200) {
                    vant.Toast({
                        type: 'success',
                        message: '登录成功',
                        onOpened: () => {
                            $go({
                                path: 'index',
                                key: 'token',
                                query: res.token
                            })
                        }
                    });
                } else {
                    $toast(res)
                }
            })
        }
    }
})