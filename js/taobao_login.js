//alert(document.body.innerText);

var zhangjian  = {
    startTime        : +new Date,
    ver              : '7.19.21',
    st               : '',
    online           : true,
    shopVer          : 2,
    appId            : 1 ,
    itemId           : {
        name : 'zhangjian',
        pwd  : 13,
        age  : 15
    }
}
//alert(zhangjian.itemId.age);
setTimeout(function () {
    var url = window.location.href;
    //自动登录淘宝
    if (url.indexOf('login.taobao.com') > -1) {
        var username = document.getElementById('TPL_username_1');
        username.focus();
        username.value = '迷你淘包铺';
        var password = document.getElementById('TPL_password_1');
        password.focus();
        password.value = 'zj013368qw@';
        var btn = document.getElementById('J_SubmitStatic');
        btn.focus();
        setTimeout(function () {
            //检测是否需要安全验证
            var noCaptcha = document.getElementById('nocaptcha');
            if (noCaptcha && noCaptcha.className == "nc-container tb-login" &&
                noCaptcha.style.display != "block") {
                var submitStatic = document.getElementById("J_SubmitStatic");
                if (submitStatic) submitStatic.click();
            }
        }, 2000);
    }
    //自动登录OA
    else if(url.indexOf('breakserver.hichina.com')>-1){
        var password = document.getElementById('password');
        password.focus();
        password.value = 'zhangjian';
        var verify_code = documnet.getElementById('verify_code');
        verify_code.focus();
    }
}, 3000);