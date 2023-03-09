$(document).ready(function () {
  $('.head-photo').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,

  });

  $(function () {
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  var landing = $('#about').offset().top;
  $('.menu1').click(function () {
    $('html,body').animate({ scrollTop: landing }, 'slow');
    return false;
  });


  var landing1 = $('#works').offset().top;
  $('.menu3').click(function () {
    $('html,body').animate({ scrollTop: landing1 }, 'slow');
    return false;
  });


  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });


  $('.works-photo a').click(function() {
    var imgSrc = $(this).children().attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');


    return false
  });


$('.close-btn').click(function() {
  $('.modal').fadeOut();
  $('body,html').css('overflow-y', 'visible');
  return false
});




});

