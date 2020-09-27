// Mobile nav bar// hide coordonee part // 
function toggle(){
    var menu = document.getElementById("Menu"),
        menuoverlay = document.getElementById("menu-overlay");
    menu.classList.toggle('active')
    menuoverlay.classList.toggle('active')
}
// Fixing nav bar on scroll //
var height = $('#coord').height();
$(window).scroll(function(){
    if($(this).scrollTop() > height){
        $('.menuPluslogo').addClass('Fixed');
        $('#Accueil').removeClass('active');
        $('.backToTop').addClass('top');
    } else{
        $('.menuPluslogo').removeClass('Fixed');
        $('#Accueil').addClass('active');
        $('.backToTop').removeClass('top');
    }
})