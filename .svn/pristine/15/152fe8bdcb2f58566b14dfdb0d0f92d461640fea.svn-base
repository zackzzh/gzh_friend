new Vue({
    el: '#friend',
    data() {
        return {
            userInfo: {},
            fileList: [],
            is_show: false
        }
    },
    created() {
        this.load()
    },
    methods: {
        /**
         * 返回按钮
         */
        onClickLeft() {
            $back()
        },
        /**
         * 获取初始化获取列表数据
         */
        load() {
            $api.queryUserInfo().then((res) => {
                this.userInfo = res.userInfo
            })
        },
        /**
         * 头像上传
         * @param {*} file 
         */
        afterRead(file) {
            this.userInfo.imgData = file.content
            this.uodateInfo({
                imgData: this.userInfo.imgData
            })
        },
        /**
         * 更新个人信息
         */
        uodateInfo(params) {
            $api.updateUserInfo(params).then((res) => {
                $toast(res)
                this.load()
            })
        },
        /**
         * 修改昵称
         */
        confirmUser() {
            this.uodateInfo({
                nickName: this.userInfo.nickName
            })
            this.is_show = false;
        },
        /**
         * 修改密码
         */
        toChange() {
            $go({
                path: 'change_password'
            })
        }
    }
})