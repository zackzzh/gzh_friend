new Vue({
    el: '#friend',
    data() {
        return {

            userInfo: {},
            active: 3,
            list: [{
                    width: '.506667rem',
                    height: '.506667rem',
                    url: 'my_info',
                    img: './img/my_1.png',
                    name: '个人信息'
                },
                {
                    width: '.506667rem',
                    height: '.506667rem',
                    url: 'release',
                    img: './img/my_2.png',
                    name: '我要发布'
                },
                {
                    width: '.493333rem',
                    height: '.466667rem',
                    url: 'release_history',
                    img: './img/my_3.png',
                    name: '发布历史'
                },
                {
                    width: '.6rem',
                    height: '.4rem',
                    url: 'apply',
                    img: './img/my_4.png',
                    name: '查看申请'
                },
                {
                    width: '.56rem',
                    height: '.453333rem',
                    url: 'advance',
                    img: './img/my_5.png',
                    name: '留言建议'
                }
            ]
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
         * 获取初始化获取列表数据
         */
        load() {
            $api.queryUserInfo().then((res) => {
                this.userInfo = res.userInfo
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
         * list列表跳转
         */
        toNext(url) {
            $go({
                path: url
            })
        }
    }
})