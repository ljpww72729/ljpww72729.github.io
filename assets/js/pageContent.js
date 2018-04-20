(function() {
  moveTOC() //将Content内容转移

  window.onresize=function(){
       var content =  document.getElementsByClassName('portfolio-max-width')[0];
     var contentParent =  document.getElementsByClassName('mdl-layout__content')[0];
    var layoutContent = document.getElementById('layout_content');
        var layoutContentWidth = (contentParent.offsetWidth - content.offsetWidth)/2;
    if(layoutContentWidth > 250){
      layoutContent.style.width = layoutContentWidth + "px";
    }else{
      layoutContent.style.width = "0px";
    }

  };

}());
var tocArray = document.querySelectorAll("h4, h5, h6");

function handleScroll(e)
  {
    var i;
       var topToc = null;
     var lastToc = topToc;
     var windowScrollTop =  document.getElementsByClassName('mdl-layout__content')[0].scrollTop;

    for (i = 0; i < tocArray.length; i++) {
      var item = tocArray[i];
      if(item.offsetTop > windowScrollTop){
        continue;
      }
      if (!topToc) {
        topToc = item;
      } else if (item.offsetTop >= topToc.offsetTop) {
        topToc = item;
      }
    }
    // todo 这里的逻辑需要优化，不然不停的设置状态
    if (topToc ) {//&& topToc != lastToc
      if(topToc.id ){//&& (lastToc == null || (lastToc.id && topToc.id != lastToc.id))
        console.log("need to active.");
        removeTocActive();
        var id = "markdown-toc-"+topToc.id;
          document.getElementById(id).classList.add("active");
      }

    }
  }

// 移除所有的目录激活状态
function removeTocActive(){
  for (i = 0; i < tocArray.length; i++) {
    var item = tocArray[i];
     if(item.id){
    var id = "markdown-toc-"+item.id;
     if(document.getElementById(id).classList.contains("active")){
    document.getElementById(id).classList.remove("active");
  }
     }
  }
}

//-------------post Content----------------------
//将Content内容转移
function moveTOC() {
  if (document.querySelector('#markdown-toc') !== null) {
    var content =  document.getElementsByClassName('portfolio-max-width')[0];
    console.log(content.offsetWidth);
    var contentParent =  document.getElementsByClassName('mdl-layout__content')[0];

      var TOCString = document.querySelector('#markdown-toc').innerHTML;
    var contentUl = document.querySelector('#layout_content');
    console.log("width===")
    console.log(contentParent.offsetWidth - content.offsetWidth);
    var layoutContent = document.getElementById('layout_content');
    var layoutContentWidth = (contentParent.offsetWidth - content.offsetWidth)/2;
    if(layoutContentWidth > 250){
          layoutContent.style.width = layoutContentWidth + "px";
      contentUl.insertAdjacentHTML('afterbegin', TOCString); //插入字符串

        // if (!isAndroidWechatBrowser()) {

            //添加scroll样式，为了平滑滚动
            //add class "scroll", for smooth scroll
      var aTags = document.querySelectorAll('#layout_content a');

            //add class for everyone
            // aTags.forEach(function () {
            //     console.log(this);
            // })
            for (var i = 0; i < aTags.length; i++) {
                // if (!aTags[i].classList.contains('scroll')) {
                //     aTags[i].classList.add('scroll')
                // }
                if (!aTags[i].hasAttribute('data-scroll')) {
                  aTags[i].setAttribute('data-scroll','');
                }

            }
        // }
    }


    }
}
