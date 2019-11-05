new Vue({
    el: '#friend',
    data() {
        return {
            noticeList: []
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
            $api.queryNoticeList().then((res) => {
                this.noticeList = res.noticeList
            })
        },
        /**
         * 同意查看
         */
        confirm(item) {
            $api.applyCheckPass({
                id: item.id
            }).then((res) => {
                if (res.code == 200) {
                    this.load()
                }
                $toast(res)
            })
        },

        /**
         * 跳转详情
         */
        toApplyDetail(item) {
            $go({
                path: 'apply_detail',
                key: 'apply_detail_params',
                query: item
            })
        }
    }
})