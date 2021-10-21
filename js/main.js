
// FIRST SLIDESHOW WITH SIDE INDEX
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var line = document.getElementsByClassName("line");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < line.length; i++) {
    line[i].className = line[i].className.replace(" Active", "");
  }
  slides[slideIndex-1].style.display = "block";
  line[slideIndex-1].className += " Active";
  $(showSlides).ready(function(){
    setTimeout(showSlides, 2000);
  })
};

// SLIDING THIRD SECTION to RIGHT and BACK TO MAIN THIRD SECTION
var sectionsIndex = 1;
  showSections(sectionsIndex);
  
function plusSections(n) {
  showSections(sectionsIndex += n);
};
function showSections(n) {
  var i;
  var section = document.getElementsByClassName("mySections");
  if (n > section.length) {sectionsIndex = 1}
  if (n < 1) {sectionsIndex = section.length}
  for (i = 0; i < section.length; i++) {
    section[i].style.display = "none";
  }
  section[sectionsIndex-1].style.display = "block";
};

// var paginaryIndex = 1;
//   showPaginary(paginaryIndex);

// function plusPage(n) {
//   showPaginary(paginaryIndex += n)
// };
// function showPaginary(n){
//   var i;
//   var paginary = document.getElementsByClassName("paginary");
//   var paginate = document.getElementsByClassName("paginate")
//   if (n > paginary.length) {
//     paginaryIndex = 1
//   };
//   if (n < 1) {
//     paginaryIndex = paginary.length
//   }
//   for (i = 0; i < paginary.length; i++){
//     paginary[i].style.display = "block";
//   }
//   for (i = 0; i < paginary.length; i++) {
//     paginate[i].className = paginate[i].className.replace(" navActive", "");
//   }
//   paginary[paginaryIndex-1].style.display = "block";
//   paginate[paginaryIndex-1].className += " navActive";
// }

// LEFT SIDE PAGE NAVIGATION
const menu = document.querySelector(".sidemenu")
menu.addEventListener('click', function(e){
  const targetMenu = e.target;
  if(targetMenu.classList.contains('paginate')){
    const menuLinkActive = document.querySelector("ul li a.navActive");
    if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
      menuLinkActive.classList.remove('navActive')
    }
    targetMenu.classList.add('navActive')
  }
})

// HOMEWORK @ this point
// need to make automatic slideshow with 1s timeout from initial origin X in 0 @ container and end in if last pic X reach at 420 px or in the end of the container box

// SMOOTH SCROLLING
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
        window.location.hash = hash;
      });
    }
  });
});

// moveUpSpan
$(document).ready(function () {
  $('.move-up span').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 700);
  })
});