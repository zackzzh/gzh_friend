new Vue({
    el: '#friend',
    data() {
        return {
            is_show: false,
            form: {
                mobile: '',
                msgCode: '', //验证码
                userDetailId: '',
                relation: '', //关系
                name: '',
                comment: '',
                score: ''
            },
            relationColumns: ['亲属', '朋友', '同学', '邻居', '同事', '其他'], //关系数据
            time: 60,
            msgText: '获取验证码',
            sendActive: false,
            relationActive: null,
            value: null,
            value1: null,
            relativesList: [],
            totalScore: ''

        }
    },
    created() {
        var id = $getItem('cer_params')
        this.form.userDetailId = id
        this.load({
            userDetailId: id
        })
    },
    methods: {
        /**
         * 初始化
         */
        load(params) {
            $api.queryRelativesList(params).then((res) => {
                this.relativesList = res.relativesList
                this.totalScore = res.totalScore
            })
        },
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
                    $api.relatives({
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
         * 亲属关系
         */
        relationFilter(index, value) {
            this.relationActive = index
            this.form.relation = value
        },
        /**
         * 提交作证
         */
        confirm() {
            this.form.score = this.value + this.value1
            $api.addRelatives(this.form).then((res) => {
                $toast(res)
                this.is_show = false
                this.load({
                    userDetailId: this.form.userDetailId
                })
                this.form = {
                    mobile: '',
                    msgCode: '',
                    relation: '',
                    name: '',
                    comment: '',
                    score: ''
                }
            })
        }
    }
})