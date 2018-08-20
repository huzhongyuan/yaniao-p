
(function() {
  let cssArr = document.getElementsByTagName('script');
  headTitle = cssArr[0].getAttribute('data-title');
  let head = '<header class="aui-bar aui-bar-nav header">'+
  '<img id="to_back" src="./../images/back.png" />' +
  '<div class = "headerTitle"></div>'+ 
  '<div class="rightblack"></div>'+ 
  '</header>';
  let headStyle =  
    '<meta name="robots" content="all">' + 
    '<meta name="author" content="w3school.com.cn">' + 
    '<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>' +
    '<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">' +
    '<meta name="apple-mobile-web-app-capable" content="yes">' +
    '<title></title>' +
    '<meta name="keywords" content="雅鸟,软装,雅鸟软装">' +
    '<meta name="description" content="深圳雅鸟软装有限公司官方网站">' +
    '<link rel="shortcut icon" href="http://ynrz.oss-cn-beijing.aliyuncs.com/img/2018/8/91bdc313-60f7-4d49-8cf3-1a854bd8fef3.png" name="ico">' +
  '</head>' + 
  '<body>' +
  '<link rel="stylesheet" type="text/css" href="../css/module/aui.css" />' +
  '<link rel="stylesheet" href="./../css/module/header.css">' +
  '<link rel="stylesheet" href="./../css/module/footer.css">' +
  '<link rel="stylesheet" href="./../css/pages/' + headTitle + '.css">' +
  '<script src="./../js/module/vue.js"></script>' +
  '<script src="./../js/lib/jquery-3.1.1.min.js"></script>' +
  '<script src="./../js/module/md5.js"></script>' +
  '<script src="./../js/module/utils.js"></script>' +
  '<script src="./../js/pages/' + headTitle + '.js"></script>';
  document.write(headStyle);
  document.write(head);
  //站点信息初始化


  if (sessionStorage.getItem('resHeader')) {
    siteInfo =  JSON.parse(sessionStorage.getItem('resHeader'));
      // 修改头部
  document.title = siteInfo.name;
  //console.log(siteInfo);
  document.getElementsByTagName('meta')[6]['content'] = siteInfo.keywords;
  document.getElementsByTagName('meta')[7]['content'] = siteInfo.description;
  document.getElementsByTagName('link')[0]['href'] = siteInfo.icon;
  } else {
    // var siteInfo = {
    //   address:"重庆市九龙坡区石桥铺",
    //   copyright:"© 2018-2019 黑鸥菩科技",
    //   description:"雅鸟软装官方网站",
    //   icon:"http://dzrenai.oss-cn-beijing.aliyuncs.com/img/2018/7/5da80089-9f98-4f1a-8590-8fd971565c5d.png",
    //   icp:"蜀ICP备17044073号",
    //   keywords:"雅鸟,软装,雅鸟软装",
    //   name:"雅鸟软装",
    //   networksecurity:"蜀公网安备11010802*****",
    //   tel:"0818-6322222",
    //   url:"http://www.yaniaozg.com",
    // };
  }


})()