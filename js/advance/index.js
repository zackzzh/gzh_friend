new Vue({
    el: '#friend',
    data() {
        return {
            form: {
                picUrl: '',
                remark: ''
            },
            fileListPicHead: [], //上传建议
        }
    },
    created() {},
    methods: {
        /**
         * 返回按钮
         */
        onClickLeft() {
            $back()
        },
        /**
         * 上传建议
         */
        afterReadPicHead(file) {
            this.form.picUrl = file.content
        },
        /**
         * 提交建议
         */
        confirm() {
            $api.addSuggestion(this.form).then((res) => {
                $toast(res)
                this.form = {
                    picUrl: '',
                    remark: ''
                }
                this.fileListPicHead = []
            })
        }
    }
})