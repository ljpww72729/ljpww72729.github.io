var content = document.getElementsByClassName('portfolio-max-width')[0];
var contentParent = document.getElementsByClassName('mdl-layout__content')[0];
// var layoutHeader = document.getElementsByClassName('mdl-layout__header')[0];
var layoutContent = document.getElementById('layout_content');
var layoutFooter = document.getElementsByClassName('mdl-mini-footer')[0];
(function() {
  moveTOC() //将Content内容转移

  window.onresize=function(){
    handleOnResize();
  };

}());

function handleOnResize(){

    var layoutContentWidth = (contentParent.offsetWidth - content.offsetWidth)/2;
    if(layoutContentWidth > 250){
      layoutContent.style.width = layoutContentWidth + "px";
      // 设置左侧目录高度，减去footer高度，防止footer遮挡左侧目录
      layoutContent.style.height = (contentParent.offsetHeight - layoutFooter.offsetHeight) + "px";
    }else{
      layoutContent.style.width = "0px";
    }
}
var tocArray = document.querySelectorAll("h4, h5, h6");
var lastContentParentHeight = 0;

function handleScroll(e)
{
  // 处理左侧目录高度，根据contentParent高度是否变化来变化左侧目录高度
    if(contentParent.offsetHeight != lastContentParentHeight){
       handleOnResize();
       lastContentParentHeight = contentParent.offsetHeight;
    }

  // 目录滚动参考：https://yuerblog.cc/2017/12/04/js-toc/
    var i;
    var topToc = null;
    var lastToc = topToc;
    var windowScrollTop = contentParent.scrollTop;

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
        console.log("topToc.offsetTop==" + topToc.offsetTop);
        document.getElementById('layout_content').scrollTop = (document.getElementById(id).offsetTop - document.getElementById('layout_content').offsetHeight / 2);
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

    var TOCString = document.querySelector('#markdown-toc').innerHTML;
    var contentUl = document.querySelector('#layout_content');
    var layoutContentWidth = (contentParent.offsetWidth - content.offsetWidth)/2;
    handleOnResize();
    if(layoutContentWidth > 250){

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
