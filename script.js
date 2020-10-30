// Mobile nav bar// hide coordonee part // 
var menu = document.getElementById("Menu"),
menuoverlay = document.getElementById("menu-overlay"),
body = document.getElementsByTagName("BODY")[0];
function toggle(){
    menu.classList.toggle('active')
    menuoverlay.classList.toggle('active')
    body.classList.toggle('stop-scrolling')
}
function toggleoff(){
    menu.classList.remove('active')
    menuoverlay.classList.remove('active')
    body.classList.remove('stop-scrolling')

}
// Fixing nav bar on scroll //
var height = $('#navbar').height();
$(window).scroll(function(){
    if($(this).scrollTop() > height){
        $('#Accueil').removeClass('active');
        $('.backToTop').addClass('top');
        $('header').addClass('fix-navbar')
    } else{
        $('#Accueil').addClass('active');
        $('.backToTop').removeClass('top');
        $('header').removeClass('fix-navbar')

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

// images slider // 
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},4000);

// contact modal // 
var close = document.getElementById('close'),
    open = document.getElementById('open'),
    modal_container = document.getElementById('modal-container');

    open.addEventListener('click',() => {
        modal_container.classList.add('show')
        body.classList.add('stop-scrolling')


    })

    close.addEventListener('click',() => {
        modal_container.classList.remove('show')
        body.classList.remove('stop-scrolling')


    })


