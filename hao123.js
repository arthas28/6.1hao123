/**
 * Created by YANG on 15/9/23.
 */

var item;
var state = 0;//初始状态函数
var date = new Date();

//初始加载函数，从cookies读取主题参数
function initLoad(){
    getColor(this);
}

//onmouseover更改字体颜色函数
function getFontColorChange(obj){
    switch (item) {
        case 'green': obj.style.color = "#118850";break;
        case 'yellow': obj.style.color = "orange";break;
        case 'red': obj.style.color = "red";break;
    }
    obj.style.textDecoration = "none";
}
//onmouseout更改字体颜色函数
function currentColor(obj){
    obj.style.color = "#000";
}
//点击主题颜色按钮更改网页主题颜色函数
function getColor(obj){
    //将主题参数存入localStorage.theme中
    if(state == 1){
        item = obj.value;
        localStorage.theme = item;
        //date.setHours(date.getHours() + (24 * 7)); //保存七天
        document.cookie = "theme=" + item + "; expires=" + date.toGMTString();
    }
    else{
        item = localStorage.theme;
        //item = document.cookie.split("=")[1];
        state = 1;
    }
    switch (item) {
        case 'green':{
            //通过更改父类className达到统一更换颜色效果
            document.getElementById("skinTheme").className = "wrapper w-1190 fontGreen";
            document.getElementById("first").style.backgroundColor ="#0aa770";
            document.getElementById("defaultSet").style.backgroundColor ="#0aa770";
            document.getElementById("navBar").style.borderTopColor ="#099e6a";
            document.getElementById("famoussite").style.borderColor ="#adb";
        };break;
        case 'yellow':{
            document.getElementById("skinTheme").className = "wrapper w-1190 fontYellow";
            document.getElementById("first").style.backgroundColor ="orange";
            document.getElementById("defaultSet").style.backgroundColor ="orange";
            document.getElementById("navBar").style.borderTopColor ="orange";
            document.getElementById("famoussite").style.borderColor ="#fde7be";
        };break;
        case 'red':{
            document.getElementById("skinTheme").className = "wrapper w-1190 fontRed";
            document.getElementById("first").style.backgroundColor ="red";
            document.getElementById("defaultSet").style.backgroundColor ="red";
            document.getElementById("navBar").style.borderTopColor ="red";
            document.getElementById("famoussite").style.borderColor ="#f5c2c2";
        };break;
    }
}

