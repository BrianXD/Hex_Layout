
//GO TOP 
let btnGoTop = document.getElementById('btnGoTop');
btnGoTop.addEventListener('click', function(e) {         
     e.preventDefault();  //cancel hyperlink event
     window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

//hide content and show main menu when pad mode

//open icon
$(".menu-open").click(function(){
  toogleEl();
 $(".footer-nav-price").addClass("footer-nav-price-2");
 $(".footer-nav-price ul").addClass("footer-nav-price-ul");
}); 

//close icon
$(".menu-close").click(function(){
  toogleEl();
 $(".footer-nav-price").removeClass("footer-nav-price-2");
 $(".footer-nav-price ul").removeClass("footer-nav-price-ul");
}); 

//hide and show html
function toogleEl(){
  $(".ai-header").toggle();
  $(".ai-tools").toggle();
  $(".footer-service").toggle();
  $(".footer-nav-price>a").toggle();
  $(".menu-open").toggle();
  $(".menu-close").toggle();

  $(".footer-nav-back").toggle();

}
 
 
   
   
   
 
