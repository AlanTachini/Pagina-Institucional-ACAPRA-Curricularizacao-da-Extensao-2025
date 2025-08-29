  function abrirMenuHamburguer() {
    var nav = document.getElementsByClassName('nav_list')[0];
    var html = document.documentElement;
    
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "flex";
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden"; 
    } else {
      nav.style.display = "none";
      document.body.style.overflow = "";
      html.style.overflow = "";
    }
  }