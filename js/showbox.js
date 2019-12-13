//页面功能窗口

setTimeout(function () {
    //document.onreadystatechange = function () {
    //if (document.readyState == "complete") {
    var url = window.location.href;
    if (url.indexOf("taobao.com") > -1) {
        //添加div
        var showboxs = document.createElement("div");
        showboxs.id = "zj_showbox_main";
        showboxs.style="width: 300px;height: 250px;background-color: gainsboro;    position: fixed;    bottom: -250px;    right: 0px;    transition: all 1.5s ease;";
        var showboxs_close = document.createElement("div");
        showboxs_close.id = "zj_showbox_main_close";
        showboxs_close.style="width: 50px;    height: 20px;    background-color: gray;    text-align: center;    line-height: 20px;    float: right;    margin: 10px;    cursor: pointer;";
        showboxs_close.setAttribute("onclick","addCSS('123')");
        showboxs_close.innerText = "关闭";
        showboxs.appendChild(showboxs_close);
        document.body.appendChild(showboxs);

        //添加功能js代码
        var div;
        div = document.getElementById("zj_showbox_main");
        div.style.bottom = "0px"
    }
    // }
    //}

}, 1000);

function zj_CloseShowBoxWin() {
    alert("进入了");
    var close = document.getElementById("zj_showbox_main_close");
    alert(close);
    if (close.innerText == "关闭") {
        close.innerText = "打开";
        div.style.bottom = "-200px"
    } else {
        close.innerText = "关闭";
        div.style.bottom = "0px"
    }
}