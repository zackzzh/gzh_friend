new Vue({
    el: '#friend',
    data() {
        return {
            userDetailList: [],
            checked: true
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
            $api.queryDetailListByToken().then((res) => {
                this.userDetailList = res.userDetailList
            })
        },
        /**
         * 编辑个人资料
         */
        toEdit(item) {
            $go({
                path: 'release',
                key: 'release_id',
                query: {
                    id: item.id,
                    type: 1
                }
            })
        },
        /***
         * 删除单身者信息
         */
        del(item) {
            $api.delDetail([item.id]).then((res) => {
                $toast(res)
                this.load()
            })
        },
        /**
         * 开启关闭
         */
        closeOrOpenDetail(index,item) {
            var params = {
                id: item.id,
                state: index
            }
            $api.closeOrOpenDetail(params).then((res) => {
                $toast(res)
                this.load()
            })
        }
    }
})