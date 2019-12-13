//加载js文件

//淘宝登录js
document.write("<script  src='http://raw.githack.com/ourstoryzj/hello-world/master/common.js'></script> ");//失败


var p = document.createElement('p');
p.id = 'zj_showbox';
document.body.appendChild(p);

//当浏览器状态发生改变
document.onreadystatechange = function () {
    //判断浏览器是否加载完毕
    if (document.readyState == "complete") {
        //用于存储内容的标签
        var url = window.location.href;
        //如果进入了淘宝分类页面,或者搜索页面，则提取宝贝网址
        if (url.indexOf('taobao.com/category') > -1 || url.indexOf('taobao.com/search') > -1) {
            //alert('进来了');
            var length = document.getElementsByClassName('shop-hesper-bd grid')[0].getElementsByClassName('item').length;
            for (var i = 0; i < length; i++) {
                var href_str = document.getElementsByClassName('shop-hesper-bd grid')[0].getElementsByClassName('item')[i].getElementsByClassName('J_TGoldData')[0].href
                p.innerHTML = p.innerHTML + '<br> ' + href_str;
            }

        }
        //如果进入了宝贝详情页
        else if (url.indexOf('item.taobao.com/item.htm') > -1) {
            
            setTimeout(function () {
                //alert('进来了');
                console.info(document.head.innerHTML);
                alert(zhangjian.itemId.name);
                var update_time = parseInt(g_config.idata.item.dbst.toString().substr(0, 10));
                var dt = new Date(update_time);
                p.innerHTML = p.innerHTML + '<br> 上架日期 ： ' + dt.toString();
            }, 3000);
        }
    }
}