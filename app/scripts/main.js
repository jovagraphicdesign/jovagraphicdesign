$(document).ready(function() {

  // intro animation
  var breedteScreen = $(window).width();
  if (breedteScreen>=600){
    $('#smallstTitle').addClass('fadeInUp');
    $('#bigTitle').addClass('slideInRight');
    $('#smallTitle').addClass('fadeInDown');
    $('.enter-btn').addClass('slideInLeft');
  }
  // enter site
  $('.scroll-down').on('click', function(){
    $('#intro').addClass('enter');
  })
  // navigation toggle
  $('.menu-toggle').on('click', function(){
    $('.menu-toggle').toggleClass('active');
    $('.menu-toggle').toggleClass('menu-toggle-open');
    $('.logo').toggleClass('logo-open');
    $('.brand-bar').toggleClass('brand-bar-open');
    $('.menu').toggleClass('open',750);
  });
  // smooth scroll animation
  var slideToLink = $('.scroll');

  slideToLink.click(function(e) {
    e.preventDefault();
    var menuHeight = $('.menu').outerHeight();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top - menuHeight
    }, 2000);
  });

  // animation van de contact buttons met animated css s
  $('#phone').hover(function() {
    $(this).find('.fa-mobile').addClass('shake');

  }, function() {
    $(this).find('.shake').removeClass('shake');
  });

  $('#facebook').hover(function() {
    $(this).find('.fa-facebook-official').addClass('rubberBand');
  }, function() {
    $(this).find('.rubberBand').removeClass('rubberBand');
  });

  $('#instagram').hover(function() {
    $(this).find('.fa-instagram').addClass('rotateIn');
  }, function() {
    $(this).find('.rotateIn').removeClass('rotateIn');
  });




});
