new Vue({
    el: '#friend',
    data() {
        return {
            id: '', //个人信息ID
            userDetail: {}, //个人信息
            relativesList: [], //作证列表
            flag: false, //是否点赞
            is_show: false, //查看密码详情
            is_apply: false, //申请查看
            viewPassword: '', //查询密码
            remark: '', //申请描述
            relativesList: [], //佐证列表
        }
    },
    created() {
        var id = $getItem('info_params')
        this.id = id
        this.load({
            id: id
        })
    },
    methods: {
        /**
         * 获取个人信息
         */
        load(params) {
            $api.queryDetailInfo(params).then((res) => {
                res.userDetail.picUrl = res.userDetail.picUrl.split('$')
                this.userDetail = res.userDetail
                this.relativesList = res.relativesList
            })
        },
        /**
         * 导航栏返回
         */
        onClickLeft() {
            $go({
                path: 'square'
            })
        },
        /**
         * 查看申请记录
         */
        toEdit() {
            $go({
                path: 'release',
                key: 'release_id',
                query: {
                    id: this.id,
                    type: 2
                }
            })
        },
        /**
         *用户点赞
         */
        like() {
            if (this.flag) {
                $api.cancelLikes({
                    id: this.id
                }).then((res) => {
                    this.userDetail.likesNum--
                    this.flag = res.flag
                    $toast(res)
                })
            } else {
                $api.likesUserDetail({
                    id: this.id
                }).then((res) => {
                    this.userDetail.likesNum++
                    this.flag = res.flag
                    $toast(res)
                })
            }
        },
        /**
         * 跳转相册
         */
        toPicurl() {
            $go({
                path: 'picurl',
                key: 'picurl_params',
                query: {
                    realName: this.userDetail.realName,
                    picUrl: this.userDetail.picUrl
                }
            })
        },
        /**
         * 我也来证明
         */
        cer() {
            $go({
                path: 'cer',
                key: 'cer_params',
                query: this.userDetail.id
            })
        },
        /**
         * 查看密码确定
         */
        confirm() {
            var params = {
                id: this.id,
                viewPassword: this.viewPassword
            }
            $api.queryContact(params).then((res) => {
                if (res.code == 200) {
                    this.is_show = false;
                }
                $toast(res)
            })
        },
        /**
         * 申请查看密码
         */
        confirmApply() {
            var params = {
                id: this.id,
                remark: this.remark
            }
            $api.applyViewPwd(params).then((res) => {
                if (res.code == 200) {
                    this.is_apply = false;
                    this.is_show = false;
                }
                $toast(res)
            })
        }
    }
})