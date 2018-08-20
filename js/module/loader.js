$(function(){
  //头部数据
  let titletext = ['设计领域', '服务范畴', '关于雅鸟','新闻中心', '联系我们'];
  let title = document.getElementsByClassName('title');
  // let websiteName = document.getElementById('websiteName');
  // websiteName.innerHTML = '雅鸟设计';
  for(let i in title) {
    title[i].innerHTML = titletext[i];
  }
})