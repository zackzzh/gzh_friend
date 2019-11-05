new Vue({
    el: '#friend',
    data() {
        return {
            active: 1,
            value: '',
            bannerList: [], //轮播图
            userList: [] //用户列表
        }
    },
    created() {
        this.load()
    },
    methods: {
        //底部导航跳转
        nav(val) {
            this.active = val
            var url = ''
            switch (Number(val)) {
                case 1:
                    url = 'index'
                    break;
                case 2:
                    url = 'square'
                    break;
                default:
                    url = 'my'
                    break;
            }
            $go({
                path: url
            })
        },
        /**
         * 搜索
         */
        search() {
            $go({
                path: 'square',
                key: 'square_params',
                query: this.value
            })
        },
        /**
         * 跳转至消息通知
         */
        toNotice() {
            $go({
                path: 'notice'
            })
        },
        /**
         * 查看更多
         */
        toSquare() {
            $go({
                path: 'square',
            })
        },
        /**
         * 获取首页信息
         */
        load() {
            $api.getPage().then((res) => {
                console.log('res', res)
                this.userList = res.userList
                this.bannerList = res.bannerList
            })
        },
        /**
         *点击进入详情 
         */
        toInfo(item) {
            $go({
                path: 'info',
                key: 'info_params',
                query: item.id
            })
        },
    }
})