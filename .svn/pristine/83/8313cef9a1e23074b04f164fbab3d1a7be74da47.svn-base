new Vue({
    el: '#friend',
    data() {
        return {
            active: 2,
            squateFilter: {
                realName: '',
                age: '',
                sex: ''
            },
            value1: null,
            value2: 'a',
            userList: [],
            sexText: '性别',
            ageText: '年龄',
            option1: [{
                    text: '男',
                    value: 1
                },
                {
                    text: '女',
                    value: 2
                },
            ],
            option2: [{
                    text: '18岁以下',
                    value: '0-17'
                },
                {
                    text: '18至24岁',
                    value: '18-24',
                    right: false
                },
                {
                    text: '25至30岁',
                    value: '25-30'
                },
                {
                    text: '31至35岁',
                    value: '31-35'
                },
                {
                    text: '36至40岁',
                    value: '36-40',
                    right: false
                },
                {
                    text: '41至45岁',
                    value: '41-45'
                },
                {
                    text: '46至50岁',
                    value: '46-50'
                },
                {
                    text: '50岁以上',
                    value: '50-100',
                    right: false
                },
            ],

            //筛选条件
            filterOptions: {
                provinceWork: null,
                cityWork: null,
                areasWork: null,
                education: null,
                incomeMonth: null,
                sex: null,
                age: null
            },
            incomeMonthColumns: ['3k以下', '3-5k', '5-10k', '10-20k', '20-50k', '50k以上'], //收入数据
            educationColumns: ['小学', '初中', '高中', '大专', '本科', '研究生', '硕士', '博士'], //学历数据
            sexActive: 0,
            ageActive: 8,
            educationActive: 8,
            incomeMonthActive: 6,
            is_work_area: false,
            province_text: '请选择',
            city_text: '请选择',
            area_text: '请选择',
            areaList,
            show: false,

        }
    },
    created() {
        var params = $getItem('square_params')
        console.log('params', params)
        if (params) {
            this.load({
                realName: params
            })
        } else {
            this.load({})
        }
    },
    methods: {
        /**
         *点击进入详情 
         */
        toInfo(item) {
            $go({
                path: 'info',
                key: 'info_params',
                query: item.id
            })
            localStorage.removeItem('square_params')
        },
        /**
         * 
         * @param {*} val 
         */
        filter() {
            this.show = true
        },
        //底部导航跳转
        onChange(val) {
            console.log('val', val);
        },
        /**
         * 搜索
         */
        search() {
            this.load(this.squateFilter)
        },
        /**
         * 获取首页信息
         */
        load(params) {
            $api.getUserList(params).then((res) => {
                this.userList = res.userList
            })
        },
        /**
         * 下拉框性别
         */
        changeSex(value) {
            if (value == 1) {
                this.sexText = '男'
                this.squateFilter.sex = '1'

            } else {
                this.sexText = '女'
                this.squateFilter.sex = '2'
            }
            this.load(this.squateFilter)
        },
        /**
         * 下拉框年龄
         */
        changeAge(value) {
            this.ageText = value + '岁'
            this.squateFilter.age = value
            this.load(this.squateFilter)
        },
        // ——————————筛选弹窗——————————
        /**
         * 性别筛选
         */
        sexFilter(index) {
            this.sexActive = index
            switch (Number(index)) {
                case 0:
                    this.filterOptions.sex = null
                    break;
                case 1:
                    this.filterOptions.sex = '1'
                    break;
                default:
                    this.filterOptions.sex = '2'
                    break;
            }
        },
        /**
         * 年龄筛选
         */
        ageFilter(index, value) {
            this.ageActive = index
            this.filterOptions.age = value
        },
        /**
         * 收入筛选
         */
        incomeMonthFilter(index, value) {
            this.incomeMonthActive = index
            this.filterOptions.incomeMonth = value
        },
        /**
         * 学历筛选
         */
        educationFilter(index, value) {
            this.educationActive = index
            this.filterOptions.education = value
        },
        /**
         * 工作地点确认
         */
        onConfirmWorkArea(val) {
            console.log('val', val)
            this.province_text = val[0].name
            this.city_text = val[1].name
            this.area_text = val[2].name
            this.filterOptions.provinceWork = val[0].name
            this.filterOptions.cityWork = val[1].name
            this.filterOptions.areasWork = val[2].name
            this.is_work_area = false;
        },
        /**
         * 筛选确定
         */
        confirm() {
            this.load(this.filterOptions)
            this.show = false;
            console.log('this.filterOptions', this.filterOptions)
        },
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
            localStorage.removeItem('square_params')
            $go({
                path: url
            })
        },
    }
})