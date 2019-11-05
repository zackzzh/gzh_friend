function $go(val) {
    let pathName = val.path
    if (val.query) {
        localStorage.setItem(val.key, JSON.stringify(val.query));
    }
    window.location.href = './' + pathName + ".html"
}

function $back() {
    window.history.go(-1);
}

function $getItem(key) {
    return JSON.parse(localStorage.getItem(key))
}

function $toast(res, path = '') {
    if (res.code == 200) {
        vant.Toast({
            type: 'success',
            message: res.msg,
            onOpened: () => {
                if (path.length > 0) {
                    $go({
                        path: path
                    })
                }
            }
        });
    } else {
        vant.Toast({
            type: 'fail',
            message: res.msg,
            onOpened: () => {}
        });
    }
}