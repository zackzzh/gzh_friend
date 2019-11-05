new Vue({
    el: '#friend',
    data() {
        return {
            form: {
                mobile: '',
                msgCode: '',
                newPassword: '',
            },
            confirmPassword: '',
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
         * 发送验证码
         */
        sendMsg() {
            if (this.form.mobile.length > 0) {
                if (this.checkPhone(this.form.mobile)) {
                    this.sendActive = true;
                    this.startTime()
                    $api.sendMsg_resetPwd({
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
         * 两次密码校验
         */
        comfirm_password_blur() {
            if (this.confirmPassword !== this.form.newPassword) {
                vant.Toast({
                    type: 'fail',
                    message: '两次密码输入不一致，请重新输入',
                });
            }
        },
        /**
         * 注册
         */
        confirm() {

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
            if (this.form.newPassword.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请填写新密码',
                });
                return
            }
            if (this.confirmPassword.length == 0) {
                vant.Toast({
                    type: 'fail',
                    message: '请输入再次确认密码',
                });
                return
            }
            if (this.confirmPassword !== this.form.newPassword) {
                vant.Toast({
                    type: 'fail',
                    message: '两次密码输入不一致，请重新输入',
                });
                return
            }
            $api.resetPwd(this.form).then((res) => {
                $toast(res, 'login')
            })
        }
    }
})