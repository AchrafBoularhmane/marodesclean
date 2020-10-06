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
// Back to top //

$(document).ready(function(){
    $('#backTop').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });
});


