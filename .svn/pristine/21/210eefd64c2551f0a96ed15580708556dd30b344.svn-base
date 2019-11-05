new Vue({
    el: '#friend',
    data() {
        return {
            item: {}
        }
    },
    created() {
        this.item = $getItem('apply_detail_params')
    },
    methods: {
        /**
         * 返回按钮
         */
        onClickLeft() {
            $back()
        },
        /**
         * 同意查看
         */
        confirm() {
            $api.applyCheckPass({
                id: this.item.id
            }).then((res) => {
                if (res.code == 200) {
                    $go({
                        path: 'apply'
                    })
                }
                $toast(res)
            })
        },
        /**
         * 不同意查看
         */
        cancel() {
            $api.applyCheckUnPass({
                id: this.item.id
            }).then((res) => {
                if (res.code == 200) {
                    $go({
                        path: 'apply'
                    })
                }
                $toast(res)
            })
        },
    }
})