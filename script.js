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
        $('.cookies').addClass('.fixcookies')
    } else{
        $('.menuPluslogo').removeClass('Fixed');
        $('#Accueil').addClass('active');
        $('.backToTop').removeClass('top');
        $('.cookies').removeClass('.fixcookies')

    }
})
// Cookies // 
var cookies = document.getElementById("cookie");
function Close () {
    cookies.classList.add("close");
}
document.getElementById("ok").addEventListener("click", function(event){
    event.preventDefault()
    cookies.classList.add("close");
});
document.getElementById("ensavoirplus").addEventListener("click", function(event){
    cookies.classList.add("close");
});



