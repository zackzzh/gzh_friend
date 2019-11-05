new Vue({
    el: '#friend',
    data() {
        return {
            realName: '',
            picUrl: []
        }
    },
    created() {
        var params = $getItem('picurl_params')
        this.realName = params.realName
        this.picUrl = params.picUrl
    },
    methods: {
        /**
         * 返回按钮
         */
        onClickLeft() {
            $back()
        },
    }
})