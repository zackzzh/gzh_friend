new Vue({
    el: '#friend',
    data() {
        return {
            form: {
                userName: '',
                mobile: '',
                msgCode: '',
                password: '',
            },
            showPassword: false,
            time: 60,
            msgText: '获取验证码',
            sendActive: false,
        }
    },
    methods: {
        /**
         * 返回按钮
         */
        onClickLeft() {
            $back()
        },
        /**
         * 切换密码显示隐藏
         */
        eye() {
            this.showPassword = !this.showPassword
        },
        /**
         * 发送验证码
         */
        sendMsg() {
            if (this.form.mobile.length > 0) {
                if (this.checkPhone(this.form.mobile)) {
                    this.sendActive = true;
                    this.startTime()
                    $api.sendMsg_register({
                        mobile: this.form.mobile
                    }).then((res) => {
                        $toast(res)
                    })
                }
            } else {
                vant.Toast({
                    type: 'fail',
                    message: '请填写手机号',
                });
            }
        },
        /**
         * 倒计时
         */
        startTime() {
            var timer = setInterval(() => {
                this.time--;
                if (this.time <= 0) {
                    this.time = 60;
                    this.msgText = '获取验证码'
                    this.sendActive = false;
                    clearInterval(timer)
                } else {
                    this.msgText = '还剩余' + this.time + 's'
                }
            }, 1000);
        },
        /**
         * 手机号正则
         */
        checkPhone(phone) {
            if (!(/^1[3456789]\d{9}$/.test(phone))) {
                vant.Toast({
                    type: 'fail',
                    message: '手机号码有误，请重填',
                });
                return false;
            } else {
                return true;
            }
        },
        /**
         * 手机号失去焦点正则
         * @param {*} val 
         */
        mobile_blur(val) {
            console.log('this.form.mobile', this.form.mobile)
            if (this.form.mobile.length > 0) {
                this.checkPhone(this.form.mobile)
            }
        },
        /**
         * 注册
         */
        confirm() {
            if (this.form.userName.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请填写姓名',
                });
                return
            }
            if (this.form.mobile.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请填写手机号',
                });
                return
            }
            if (this.form.msgCode.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请填写验证码',
                });
                return
            }
            if (this.form.password.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请填写密码',
                });
                return
            }
            $api.register(this.form).then((res) => {
                if (res.code == 200) {
                    vant.Toast({
                        type: 'success',
                        message: '注册成功',
                    });
                    $go({
                        path: 'index',
                        key: 'token',
                        query: res.token
                    })
                } else {
                    $toast(res)
                }
            })
        }
    }
})