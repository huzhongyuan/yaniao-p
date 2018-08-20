let foot ='<footer class="aui-bar aui-bar-tab footer" id="footer">' +

'</footer>' +
'</body>' +
'</html>';
document.write(foot);


let to_back = document.getElementById('to_back');
to_back.style.visibility = 'hidden';

//返回上一层
back();
//点击底部导航跳转
let footNav = () => {
    let tohome = document.getElementsByClassName('tohome')[0];
    let toteam = document.getElementsByClassName('toteam')[0];
    let tocase = document.getElementsByClassName('tocase')[0];
    let tocompany = document.getElementsByClassName('tocompany')[0];
    tohome.onclick = (event) => {
        sessionStorage.setItem('local', 0);
        window.location.href = './home.html';
        event.stopPropagation();
    }
    toteam.onclick = (event) => {
        sessionStorage.setItem('local', 1);
        window.location.href = './team.html';
        event.stopPropagation();
    }
    tocase.onclick = (event) => {
        sessionStorage.setItem('local', 2);
        window.location.href = './case.html';
        event.stopPropagation();
    }
    tocompany.onclick = (event) => {
        sessionStorage.setItem('local', 3);
        window.location.href = './company.html';
        event.stopPropagation();
    }
}
// sessionStorage.setItem('resFooter', '');
// console.log(sessionStorage.getItem('resFooter'));

let onfocus = () => {
    let local = sessionStorage.getItem('local');
    local = parseInt(local);
    //console.log(local);
    let resFooter = sessionStorage.getItem('resFooter');
    resFooter = JSON.parse(resFooter);
    resFooter[local].addImgUrl = resFooter[local].imgUrl;
    return resFooter;
}

//写入头部和底部数据
let writeCommon = (resFooter, resHeader) => {
    let footerNav = document.createElement('div');
    footerNav.innerHTML = '<div class="aui-bar-tab-item footerNav tohome" tapmode>' +
        '<img src="' + resFooter[0].addImgUrl + '" class="homeImg" style="width:1rem;height:1rem;">' +
        '<div  class="aui-bar-tab-label">' + resFooter[0].columnName + '</div>' +
    '</div>' +
    '<div class="aui-bar-tab-item footerNav toteam" tapmode>' +
        '<img src="' + resFooter[1].addImgUrl + '" style="width:1rem;height:1rem;" class="teamImg">' +
        '<div class="aui-bar-tab-label">' +resFooter[1].columnName+ '</div>'+
    '</div>' +
    '<div class="aui-bar-tab-item footerNav tocase" tapmode>' +
        '<img src="' + resFooter[2].addImgUrl + '"  style="width:1rem;height:1rem;" class="caseImg">' +
        '<div class="aui-bar-tab-label">' + resFooter[2].columnName + '</div>' +
    '</div>' +
    '<div class="aui-bar-tab-item footerNav tocompany" tapmode>' +
        '<img src="' + resFooter[3].addImgUrl + '"  style="width:1rem;height:1rem;" class="companyImg">' +
        '<div class="aui-bar-tab-label">' + resFooter[3].columnName + '</div>' +
    '</div>';
    let footer = document.getElementById('footer');
    footer.style.backgroundColor = 'rgba(0,0,0,1)';
    footer.appendChild(footerNav);
    let header = document.getElementsByClassName('headerTitle')[0];
    header.innerHTML = resHeader.name;
}

// sessionStorage.setItem('resFooter', '');
//储存数据
if(sessionStorage.getItem('resFooter') && sessionStorage.getItem('resFooter')) {
    //console.log(1111);
    let resFooter = sessionStorage.getItem('resFooter');
    let resHeader = sessionStorage.getItem('resHeader');
    resFooter = JSON.parse(resFooter);
    resHeader = JSON.parse(resHeader);
    resFooter = onfocus();
    writeCommon(resFooter, resHeader);
    footNav();
}else {
//首次进入界面加载数据
let footerImg = new Promise((resolve, reject) => {
    $.ajax({
        url: baseUrl + '/siteInfo',
        dataType: 'json',
        method: 'get',
        success: function (res) {
        console.log(res);
        sessionStorage.setItem('resFooter', JSON.stringify(res.h5Footer));
        sessionStorage.setItem('resHeader', JSON.stringify(res.siteInfo));
        sessionStorage.setItem('local', 0);
        resFooter = onfocus();
        writeCommon(resFooter, res.siteInfo);
        onfocus();
        footNav();
        resolve(1);
        }
    })
}).then (() => {
  siteInfo =  JSON.parse(sessionStorage.getItem('resHeader'));
// 修改头部
  document.title = siteInfo.name;
  document.getElementsByTagName('meta')[6]['content'] = siteInfo.keywords;
  document.getElementsByTagName('meta')[7]['content'] = siteInfo.description;
  document.getElementsByTagName('link')[0]['href'] = siteInfo.icon;
})
}



