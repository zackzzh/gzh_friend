const $api = {
    // 登录
    login: (params) => {
        return request({
            url: "user/login",
            data: params,
            method: 'POST'
        })
    },
    // 注册
    register: (params) => {
        return request({
            url: "user/register",
            data: params,
            method: 'POST'
        })
    },
    // 重置密码
    resetPwd: (params) => {
        return request({
            url: "user/resetPwd",
            data: params,
            method: 'POST'
        })
    },
    // 注册验证码
    sendMsg_register: (params) => {
        return request({
            url: "sendMsg/register",
            params: params,
            method: 'get'
        })
    },
    // 重置密码验证码
    sendMsg_resetPwd: (params) => {
        return request({
            url: "sendMsg/resetPwd",
            params: params,
            method: 'get'
        })
    },
    // 提交问题反馈接口
    addSuggestion: (params) => {
        return request({
            url: "home/addSuggestion",
            data: params,
            method: 'POST'
        })
    },
    // 首页查询接口
    getPage: (params) => {
        return request({
            url: "home/getPage",
            params: params,
            method: 'get'
        })
    },
    //获取用户列表接口
    getUserList: (params) => {
        return request({
            url: "home/getUserList",
            data: params,
            method: 'POST'
        })
    },
    //用户新增单身资料
    saveDetail: (params) => {
        return request({
            url: "user/saveDetail",
            data: params,
            method: 'POST'
        })
    },
    //用户查询创建单身资料列表
    queryDetailListByToken: (params) => {
        return request({
            url: "user/queryDetailListByToken",
            params: params,
            method: 'get'
        })
    },
    //用户查询单身资料详情----》编辑个人信息时
    queryDetailInfoByToken: (params) => {
        return request({
            url: "user/queryDetailInfoByToken",
            params: params,
            method: 'get'
        })
    },
    //用户修改单身资料
    updateDetail: (params) => {
        return request({
            url: "user/updateDetail",
            data: params,
            method: 'POST'
        })
    },
    //用户修改单身资料
    delDetail: (params) => {
        return request({
            url: "user/delDetail",
            data: params,
            method: 'POST'
        })
    },
    //获取广场列表
    getUserList: (params) => {
        return request({
            url: "home/getUserList",
            data: params,
            method: 'POST'
        })
    },
    //获取用户详细信息 ---》广场进去的
    queryDetailInfo: (params) => {
        return request({
            url: "user/queryDetailInfo",
            params: params,
            method: 'get'
        })
    },
    //对单身资料点赞
    likesUserDetail: (params) => {
        return request({
            url: "user/likesUserDetail",
            params: params,
            method: 'get'
        })
    },
    //取消点赞
    cancelLikes: (params) => {
        return request({
            url: "user/cancelLikes",
            params: params,
            method: 'get'
        })
    },
    //用户输入密码，查看单身人士的联系方式
    queryContact: (params) => {
        return request({
            url: "user/queryContact",
            params: params,
            method: 'get'
        })
    },
    //用户查询索要联系方式密码的申请列表
    queryNoticeList: (params) => {
        return request({
            url: "user/queryNoticeList",
            params: params,
            method: 'get'
        })
    },
    //用户查询自己申请索要联系方式的查询密码列表（用户通知消息接口）
    queryApplyList: (params) => {
        return request({
            url: "user/queryApplyList",
            params: params,
            method: 'get'
        })
    },
    //申请查看单身人士联系方式信息的密码
    applyViewPwd: (params) => {
        return request({
            url: "user/applyViewPwd",
            params: params,
            method: 'get'
        })
    },
    //用户审核索要联系方式密码通过
    applyCheckPass: (params) => {
        return request({
            url: "user/applyCheckPass",
            params: params,
            method: 'get'
        })
    },
    //用户审核索要联系方式密码不通过
    applyCheckUnPass: (params) => {
        return request({
            url: "user/applyCheckUnPass",
            params: params,
            method: 'get'
        })
    },
    //用户关闭或打开单身资料
    closeOrOpenDetail: (params) => {
        return request({
            url: "user/closeOrOpenDetail",
            params: params,
            method: 'get'
        })
    },
    //亲友认证,发送的手机验证码
    relatives: (params) => {
        return request({
            url: "sendMsg/relatives",
            params: params,
            method: 'get'
        })
    },
    //亲友认证,发送的手机验证码
    addRelatives: (params) => {
        return request({
            url: "user/addRelatives",
            data: params,
            method: 'POST'
        })
    },
    //查询亲友团信息
    queryRelativesList: (params) => {
        return request({
            url: "user/queryRelativesList",
            params: params,
            method: 'get'
        })
    },
    //用户信息查询
    queryUserInfo: (params) => {
        return request({
            url: "user/queryUserInfo",
            params: params,
            method: 'get'
        })
    },
    //修改用户基础资料
    updateUserInfo: (params) => {
        return request({
            url: "user/updateUserInfo",
            data: params,
            method: 'POST'
        })
    },

    //提交问题反馈接口
    addSuggestion: (params) => {
        return request({
            url: "home/addSuggestion",
            data: params,
            method: 'POST'
        })
    },
}