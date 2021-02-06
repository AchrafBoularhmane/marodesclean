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

// doublie check if input is empty //
function checkIfEmpty(input) {
  if (input == "") {
    return false;
  } else return true;
}
// doublie check email adress //
function checkEmail(input) {
  var atpos = input.indexOf("@"),
    dotpos = input.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    return false;
  } else return true;
}
/* user input contactform double-check*/
document.querySelector("#FormContact").addEventListener("submit", function (e) {
  e.preventDefault();
  return SubmitContactForm();
});

function SubmitContactForm() {
  /* User input*/
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
    regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  $(".nomComplet-vide, .nomComplet-non-valide, .mobile , .email, .objet, .message").removeClass("show");
  if (checkIfEmpty(contact_form.NomComplet) == false) {
    $(".nomComplet-vide").addClass("show");
  } else if (checkIfEmpty(contact_form.NomComplet) == true && regname.test(contact_form.NomComplet.trim()) == false) {
    $(".nomComplet-non-valide").addClass("show");
  } else if (regphone.test(contact_form.Mobile) == false) {
    $(".mobile").addClass("show");
  } else if (checkEmail(contact_form.Email) == false) {
    $(".email").addClass("show");
  } else if (checkIfEmpty(contact_form.Objet) == false) {
    $(".objet").addClass("show");
  } else if (checkIfEmpty(contact_form.Message) == false) {
    $(".message").addClass("show");
  } else {
    $("#modal-container").addClass("show");
    $("body,html").addClass("stop-scrolling");
    $("#close").click(function () {
      $("#modal-container").removeClass("show");
      $("body,html").removeClass("stop-scrolling");
      $("#FormContact").submit();
      return true;
    });
  }
}

/* inscription newsletter double check */
document.querySelector("#newsletter-submit").addEventListener("submit", function (e) {
  e.preventDefault();
  return newsletter();
});

function newsletter() {
  var newsletterinput = $("#user-email").val();
  if (checkEmail(newsletterinput) == false) {
    $(".email-newsletter").addClass("show");
  } else {
    $("#modal-container-NL").addClass("show");
    $("body,html").addClass("stop-scrolling");
    $("#close-NL").click(function () {
      $("#modal-container-NL").removeClass("show");
      $("body,html").removeClass("stop-scrolling");
      $("#newsletter-submit").submit();
      return true;
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
