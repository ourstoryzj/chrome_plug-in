//先添加common.js文件,然后使用js方法引用js文件
var script_temp =document.createElement('script');
script_temp.setAttribute('type','text/javascript');
script_temp.setAttribute('src','http://raw.githack.com/ourstoryzj/chrome_plug-in/master/js/common.js');
document.getElementsByTagName('head')[0].appendChild(script_temp);

//使用方法引用js文件
script_temp =document.createElement('script');
script_temp.setAttribute('type','text/javascript');
script_temp.setAttribute('src','http://raw.githack.com/ourstoryzj/chrome_plug-in/master/js/showbox.js');
document.getElementsByTagName('head')[0].appendChild(script_temp);

addScript('http://raw.githack.com/ourstoryzj/chrome_plug-in/master/js/showbox.js');
