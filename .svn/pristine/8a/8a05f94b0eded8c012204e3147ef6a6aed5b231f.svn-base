new Vue({
    el: '#friend',
    data() {
        return {
            is_birthbay: false, //出生年月日判断
            is_sex: false, //性别判断
            is_education: false, //学历判断
            is_incomeMonth: false, //收入判断
            is_work_area: false, //工作地区判断
            is_birth_area: false, //出生地区判断
            currentDate: new Date(), //当前时间
            fileListPicUrl: [], //上传相册
            fileListPicHead: [], //上传封面
            is_relation: false, //亲属关系判断
            is_status: false, //联系方式管理
            form: {
                realName: '', //姓名
                sex: null, //性别
                birthday: '', //出生年月日
                education: '', //学历
                incomeMonth: '', //收入
                telephone: '', //手机号
                wechatNumber: '', //微信号
                provinceBirth: '', //出生地省
                cityBirth: '', //出生地市
                areasBirth: '', //出生地区
                provinceWork: '', //工作地省
                cityWork: '', //工作地市
                areasWork: '', //工作地区
                relation: '', //亲属关系
                picHead: '', //主图列表头像图
                picUrl: '', //个人介绍图
                viewPassword: '', //联系方式隐藏密码
                heightMan: '', //身高
                autograph: '', //个性签名
                status: null, //联系方式管理
            },
            statusText: '请选择',
            birthText: '请选择',
            sexText: '请选择',
            educationText: '请选择',
            incomeMonthText: '请选择',
            workAreaText: '请选择',
            birthAreaText: '请选择',
            relationText: '请选择',
            sexColumns: [{
                    name: '男',
                    value: 1
                },
                {
                    name: '女',
                    value: 2
                }
            ], //性别数据
            statusColumns: [{
                    name: '联系方式公开',
                    value: 0
                },
                {
                    name: '联系方式隐藏',
                    value: 1
                }
            ], //性别数据
            relationColumns: ['亲属', '朋友', '同学', '邻居', '同事', '其他'], //关系数据
            incomeMonthColumns: ['3k以下', '3-5k', '5-10k', '10-20k', '20-50k', '50k以上'], //收入数据
            educationColumns: ['小学', '初中', '高中', '大专', '本科', '研究生', '硕士', '博士'], //学历数据
            areaList, //省市区数据
            minDate: new Date(1900, 1, 1),
            maxDate: new Date(),
            //更新信息
            picUrl: [],
            picHead: '',
            id: null,
            showPicUrl: true,
            showPicHead: true,
            type: null
        }
    },
    created() {
        var params = JSON.parse(localStorage.getItem('release_id'))
        if (params && params.id) {
            this.id = params.id
            this.type = params.type
            this.loadEdit({
                id: params.id
            })
        }
    },
    methods: {
        /**
         * 编辑获取个人信息
         */
        loadEdit(params) {
            $api.queryDetailInfoByToken(params).then((res) => {
                Object.assign(this.form, res.userDetailInfo)
                if (res.userDetailInfo.sex == 1) {
                    this.sexText = '男'
                }
                if (res.userDetailInfo.sex == 2) {
                    this.sexText = '女'
                }
                if (res.userDetailInfo.status == 0) {
                    this.statusText = '联系方式公开'
                }
                if (res.userDetailInfo.status == 1) {
                    this.statusText = '联系方式隐藏'
                }
                if (res.userDetailInfo.birthday.length > 0) {
                    this.birthText = res.userDetailInfo.birthday
                }
                if (res.userDetailInfo.education.length > 0) {
                    this.educationText = res.userDetailInfo.education
                }
                if (res.userDetailInfo.incomeMonth.length > 0) {
                    this.incomeMonthText = res.userDetailInfo.incomeMonth
                }
                if (res.userDetailInfo.relation.length > 0) {
                    this.relationText = res.userDetailInfo.relation
                }
                if (res.userDetailInfo.provinceWork.length > 0 || res.userDetailInfo.cityWork.length > 0 || res.userDetailInfo.areasWork.length > 0) {
                    this.workAreaText = res.userDetailInfo.provinceWork + '-' + res.userDetailInfo.cityWork + '-' + res.userDetailInfo.areasWork
                }
                if (res.userDetailInfo.provinceBirth.length > 0 || res.userDetailInfo.cityBirth.length > 0 || res.userDetailInfo.areasBirth.length > 0) {
                    this.birthAreaText = res.userDetailInfo.provinceBirth + '-' + res.userDetailInfo.cityBirth + '-' + res.userDetailInfo.areasBirth
                }
                if (res.userDetailInfo.picUrl.length > 0) {
                    this.picUrl = res.userDetailInfo.picUrl.split('$')
                }
                if (res.userDetailInfo.picHead.length > 0) {
                    this.picHead = res.userDetailInfo.picHead
                }
            })
        },
        /**
         * 返回按钮
         */
        onClickLeft() {
            localStorage.removeItem('release_id');
            setTimeout(() => {
                if (this.type == 2) {
                    $go({
                        path: 'info',
                        key: 'info_params',
                        query: this.id
                    })
                } else {
                    $back()
                }
            }, 100);
        },
        /**
         * 出生日期确定
         */
        confirm_birthbay(val) {
            this.form.birthday = val.getFullYear() + '年' + this.p((val.getMonth() + 1)) + '月' + this.p(val.getDate()) + '日'
            this.birthText = this.form.birthday
            this.is_birthbay = false;
        },
        p(s) {
            return s < 10 ? '0' + s : s
        },
        /**
         * 性别确定
         */
        onConfirmSex(val) {
            this.form.sex = val.value
            this.sexText = val.name
            this.is_sex = false;
        },
        /**
         * 联系方式管理确定
         */
        onConfirmStatus(val) {
            this.form.status = val.value
            this.statusText = val.name
            this.is_status = false;
        },
        /**
         * 学历确定
         */
        onConfirmEducation(val) {
            this.form.education = val
            this.educationText = val;
            this.is_education = false;
        },
        /**
         * 收入确定
         */
        onConfirmIncomeMonth(val) {
            this.form.incomeMonth = val
            this.incomeMonthText = val;
            this.is_incomeMonth = false;
        },
        /**
         * 工作地点确认
         */
        onConfirmWorkArea(val) {
            this.workAreaText = val[0].name + '-' + val[1].name + '-' + val[2].name
            this.form.provinceWork = val[0].name
            this.form.cityWork = val[1].name
            this.form.areasWork = val[2].name
            this.is_work_area = false;
        },
        /**
         * 出生地区确认
         */
        onConfirmBirthArea(val) {
            this.birthAreaText = val[0].name + '-' + val[1].name + '-' + val[2].name
            this.form.provinceBirth = val[0].name
            this.form.cityBirth = val[1].name
            this.form.areasBirth = val[2].name
            this.is_birth_area = false;
        },
        /**
         * 关系确定
         * @param {*} val 
         */
        onConfirmRelation(val) {
            this.form.relation = val
            this.relationText = val;
            this.is_relation = false;
        },

        /**
         *上传相册 
         */
        afterReadPicUrl(file) {
            console.log('flie', file)
            var sum = ''
            if (file.length > 0) {
                file.forEach((data, index) => {
                    if (file.length - 1 == index) {
                        sum += (data.content)
                    } else {
                        sum += (data.content + '$')
                    }
                });
            } else {
                sum = file.content
            }
            this.showPicUrl = false;
            this.form.picUrl = sum
        },
        /**
         * 上传封面
         */
        afterReadPicHead(file) {
            console.log('flie', file)
            this.showPicHead = false
            this.form.picHead = file.content
        },
        /**
         * 确认提交
         */
        confirm() {

            $api.saveDetail(this.form).then((res) => {
                $toast(res, 'release_history')
            })
        },
        /**
         * 更新个人信息
         */
        updateInfo() {

            $api.updateDetail(this.form).then((res) => {
                localStorage.removeItem('release_id');
                if (this.type == 2) {
                    $toast(res);
                    $go({
                        path: 'info',
                        key: 'info_params',
                        query: this.id
                    })
                } else {
                    $toast(res, 'release_history')
                }
            })
        }
    }
})