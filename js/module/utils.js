//当屏幕尺寸大于750px跳转到PC端
let w = document.body.clientWidth;
if (w >= 750) {
  window.location.href = 'http://www.yaniaozg.com';
}
//将时间戳转化为日期格式
function timestampToTime(inputTime) {
  //console.log(typeof(inputTime));
  var date = new Date(inputTime);
  var y = date.getFullYear();  
  var m = date.getMonth() + 1;  
  m = m < 10 ? ('0' + m) : m;  
  var d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;  
  second = second < 10 ? ('0' + second) : second; 
  return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
}

//去除双引号
let replaceQ = (str) => {
  str = str.substring(1, str.length - 1);
  return str;
}

//获取url参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

//匹配富文本之间的文本
let march = (s) => {
  var dd = s.replace(/<\/?.+?>/g, "");
  var dds = dd.replace(/ /g, "");//dds为得到后的内容
  return dds;
}
// 设置常数
const baseUrl = 'http://118.24.159.161:8083/h5';
//const baseUrl = 'http://mobile.yaniaozg.com:8093/h5';
// 获取基本信息
let timeStamp = Date.parse(new Date());
let token = timeStamp + 'hopynrztoken';
token = md5(token).toUpperCase();

// 设置接口token
$(document).ajaxSend(function (event, xhr) {
  xhr.setRequestHeader("token", token);
  xhr.setRequestHeader("timeStamp", timeStamp);
});

//返回上一页
let back = () => {
  let to_back = document.getElementById('to_back');
  to_back.onclick = () => {
    window.history.go(-1);
  }
}

//得到头部标签
let getHeader = () => {
  if (sessionStorage.getItem('resHeader')) {
    let header = document.getElementsByClassName('headerTitle')[0];
    let resHeader = sessionStorage.getItem('resHeader');
    resHeader = JSON.parse(resHeader);
    header.innerHTML = resHeader.name;
  } else {
    $.ajax({
      url: baseUrl + '/siteInfo',
      dataType: 'json',
      method: 'get',
      success: function (res) {
        let header = document.getElementsByClassName('headerTitle')[0];
        header.innerHTML = res.siteInfo.name;
      }
    })
  }
}


    //上拉加载
    let upload = (that,loadMore) => {
      //获取滚动条当前的位置 
      function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
          scrollTop = document.body.scrollTop;
        }
        return scrollTop;
      }
      //获取当前可视范围的高度 
      function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
          clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        }
        else {
          clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
      }
      //获取文档完整的高度 
      function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
      window.onscroll = function () {
        // console.log(2222);
        //console.log(getScrollTop() + ';' + getClientHeight() + ';' + getScrollHeight())
        if (getScrollTop() + getClientHeight() - getScrollHeight() > -50 ) {
          //ajax从这里开始
          //console.log(1111111);
          if (!isload) {
            //console.log(1111);
            loadMore(that);
          }
        }
      }
    }

    // //图片加载错误
    // function onfind(img) {
    //   console.log(1111);
    //   img.src="./../images/add.png";
    //   img.onerror=null;
    // }

//图片加载失败显示默认图片
let errorimg = (res) => {
  for (let i in res) {
    if (!res[i].show_url) {
      res[i].show_url = 'http://www.watx365.com/img/zwimg.png';
    }
  }
  return res;
}


// //设置图片加载失败默认图片
// function imgNotfind(e) {
//   console.log(111111);
//   var img = e.srcElement;
//   img.src = "http://www.watx365.com/img/zwimg.png";
// }

// //设置默认图片
// function imgDefault(e) {
//   var img = e.srcElement;
//   img.src = "/img/forme3.png";
// }