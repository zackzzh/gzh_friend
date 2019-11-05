new Vue({
    el: '#friend',
    data() {
        return {
            applyList:[]
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
            $api.queryApplyList().then((res) => {
                this.applyList = res.applyList
            })
        },
    }
})