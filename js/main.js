$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navigation on scroll script
      if(this.scrollY > 20){
          $('.navigation').addClass("sticky");
      }else{
          $('.navigation').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navigation .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navigation script
  $('.menu-btn').click(function(){
      $('.navigation .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Business Owner", "Photographer", "Partner", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Business Owner", "Photographer", "Partner", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

// Photo Gallery Javascript

$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('4000');
            $('.filter').filter('.'+value).show('4000'); 
        }
    });
    $(".btn").each(function(){
       $(this).click(function(){
          $(this).addClass("active");
          $(this).siblings().removeClass("active");
       });
    });
});

 $(document).ready(function(){
        $("area[rel^='prettyPhoto']").prettyPhoto(); 
        $(".galleryh:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
        $(".galleryh:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
    });