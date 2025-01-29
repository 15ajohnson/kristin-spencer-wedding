(() => {
    window.onscroll = function() {
      scrollFunction()
    };
  })();
    
  function scrollFunction() {
    document.getElementById("menu-icon-active").setAttribute("id", "menu-icon-active")
    // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //   // Scroll Down
    //   document.getElementById("header").style.position="fixed";
    //   document.getElementById("header").style.top="0px";
    //   document.getElementById("header-content").style.height="150px";
    //   document.getElementById("header-content").style.overflow="hidden";
    //   // document.getElementById("logo").style.width="100px";
    //   // document.getElementById("sub-header").style.display="none";
    // } else {
    //   // document.getElementById("logo").style.width="150px";
    //   // document.getElementById("sub-header").style.display="block";
    //   document.getElementById("header").style.position="absolute";
    //   document.getElementById("header").style.top="20px";
    //   document.getElementById("header-content").style.height="275px";
    //   document.getElementById("header-content").style.overflow="visible";
    // }
  }