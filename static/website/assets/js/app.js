//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionVideo();
    app.functionAnimation();
    app.scrollToSection();
    app.functionInitParallax();
    app.functionNavInitScroll();
    
  },
  functionNavInitScroll: function(){
    $(window).scroll(function() {
      var nav = $('#navbar-main');
      var top = 700;
      if ($(window).scrollTop() >= top) {
  
          nav.addClass('bg-light');
          nav.removeClass('bg-transparent');
          nav.removeClass('navbar-dark');
          
      } else {
        
          nav.removeClass('bg-light');
          nav.addClass('bg-transparent');
          nav.addClass('navbar-dark');
      }
    });
  },
  functionInitParallax: function(){
    luxy.init();
  },
  functionVideo: function () {
       // jQuery is required to run this code
  $( document ).ready(function() {
    
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $('.homepage-hero-module').height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }
  },
  functionAnimation: function(){
    $(".btn-container-velocity").velocity("fadeIn", function(){
      $(".btn-container-velocity .btn").velocity(
        { translateY: "10px" },
        { duration: 800, loop: true }
      );
    });
    $(".img-container-velocity").velocity("fadeIn", function(){
      $(".img-container-velocity img").velocity(
        { translateY: "15px" },
        { duration: 1500, loop: true }
      );
    });
    $(".img-container-velocity2").velocity("fadeIn", function(){
      $(".img-container-velocity2 img").velocity(
        { translateY: "20px" },
        { duration: 2500, loop: true }
      );
    });
  },
  scrollToSection: function(){
        $('.scroll').on('click', function(e) {
          var destination = $(this).attr('href');
          e.preventDefault();
            $(destination).velocity('scroll',{
              duration: 800,
              offset: -40,
              easing: 'ease-in-out-sine'
            });
           
        }
    )},
};
$("document").ready(function () {
  app.init();
});