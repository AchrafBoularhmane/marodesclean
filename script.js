// Mobile nav bar// hide coordonee part //
var menu = document.getElementById("Menu"),
  menuoverlay = document.getElementById("menu-overlay"),
  body = document.getElementsByTagName("BODY")[0];
function toggle() {
  menu.classList.toggle("active");
  menuoverlay.classList.toggle("active");
  body.classList.toggle("stop-scrolling");
  cookies.classList.add("close-cookies");
}
function toggleoff() {
  menu.classList.remove("active");
  menuoverlay.classList.remove("active");
  body.classList.remove("stop-scrolling");
  cookies.classList.remove("close-cookies");
}
// Fixing nav bar on scroll //
var height = $("#Apropos,#desinf,#mentions-home").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $("#Accueil").removeClass("active");
    $(".backToTop").addClass("top");
    $("header").addClass("fix-navbar");
  } else {
    $("#Accueil").addClass("active");
    $(".backToTop").removeClass("top");
    $("header").removeClass("fix-navbar");
  }
});
// Cookies //
var cookies = document.getElementById("cookie");
function Close() {
  cookies.classList.add("close-cookies");
}
document.getElementById("ok").addEventListener("click", function (event) {
  event.preventDefault();
  cookies.classList.add("close-cookies");
});
document.getElementById("ensavoirplus").addEventListener("click", function (event) {
  cookies.classList.add("close-cookies");
});

// Back to top //
$(document).ready(function () {
  $("#backTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// images slider //
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);

/* user input contactform double-check*/
document.querySelector("#FormContact").addEventListener("submit", function (e) {
  e.preventDefault();
  SubmitContactForm();
});

function SubmitContactForm() {
  /* User input */
  let contact_form = {
    NomComplet: $("#Nom-Complet").val(),
    Prenom: $("#Prenom").val(),
    Mobile: $("#Mobile").val(),
    Email: $("#Email").val(),
    Objet: $("#Objet").val(),
    Message: $("#Message").val(),
  };
  /*Double_check user input*/
  var regname = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
    regobjet = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
    regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    atpos = contact_form.Email.indexOf("@"),
    dotpos = contact_form.Email.lastIndexOf("."),
    close = document.getElementById("close"),
    modal_container = document.getElementById("modal-container");

  $(".nomComplet-vide, .nomComplet-non-valide, .mobile , .email, .objet, .message").removeClass("show");
  if (contact_form.NomComplet == "") {
    $(".nomComplet-vide").addClass("show");
  } else if (contact_form.NomComplet != "" && regname.test(contact_form.NomComplet) == false) {
    $(".nomComplet-non-valide").addClass("show");
  } else if (regphone.test(contact_form.Mobile) == false) {
    $(".mobile").addClass("show");
  } else if (atpos < 1 || dotpos - atpos < 2) {
    $(".email").addClass("show");
  } else if (contact_form.Objet == "") {
    $(".objet").addClass("show");
  } else if (contact_form.Message == "") {
    $(".message").addClass("show");
  } else {
    modal_container.classList.add("show");
    body.classList.add("stop-scrolling");
    close.addEventListener("click", () => {
      window.location = "./contactform.php";
      modal_container.classList.remove("show");
      body.classList.remove("stop-scrolling");
      document.querySelector("#FormContact").reset();
    });
  }
}

/* inscription newsletter */
function newsletter() {
  var newsletterinput = $("#user-email").val(),
    atpos = newsletterinput.indexOf("@"),
    dotpos = newsletterinput.lastIndexOf("."),
    close_NL = document.getElementById("close-NL"),
    modal_container_NL = document.getElementById("modal-container-NL");

  if (atpos < 1 || dotpos - atpos < 2) {
    $(".email-newsletter").addClass("show");
  } else {
    modal_container_NL.classList.add("show");
    body.classList.add("stop-scrolling");
    close_NL.addEventListener("click", () => {
      window.location = "./newsletter.php";
      modal_container_NL.classList.remove("show");
      body.classList.remove("stop-scrolling");
      document.querySelector("#user-email").reset();
    });
  }
}
/*animation on scroll*/
var ratio = 0.1;
var options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

var handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

document.documentElement.classList.add("reveal-loaded");

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r);
});

/*100vh mobile*/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

/*loading animation*/
