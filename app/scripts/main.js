$(function () {
  // 'use strict';
  const typed = new Typed('#type', {
    strings: ['Digital Marketing', 'UX/UI Design'],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity
  });
  // $(window).scroll(function () {
  //   var sticky = $('.header__nav'),
  //     scroll = $(window).scrollTop();

  //   if (scroll >= 500) sticky.addClass('fixed');
  //   else sticky.removeClass('fixed');
  // });
  // Menu Nav
  function smoothSctollTop() {
    $('a').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 140
        }, 1000);
      }
    });
  }
  smoothSctollTop();

  // $('#free-call-form').submit(function (e) {
  //   e.preventDefault();
  //   // var valid;
  //   // valid = validateContact();
  //   // if(valid) {
  //   $.ajax({
  //     url: 'mail.php',
  //     data: 'username=' +
  //       $('#username').val() +
  //       '&email=' +
  //       $('#email').val() +
  //       '&phoneNumber=' +
  //       $('#phoneNumber').val() +
  //       '&selectCourse=' +
  //       $('input[name='selectCourse']:checked').val(),
  //     type: 'POST',
  //     success: function (data) {
  //       $('#mail-status').html(data);
  //       $('#free-call-form')[0].reset();
  //     },
  //     error: function () {}
  //   });
  //   // }
  // });

  // $vi = $(document).width();
  // console.log($vi);
  var controller = new ScrollMagic.Controller();
  if ($(document).width() < 768) {
    var scene = new ScrollMagic.Scene({
        triggerElement: '.duration-enquire-card',
        offset: -120
      })
      .setTween('.mcta', 0.5, {
        display: 'none'
      })
      .addTo(controller);
  }
  if ($(document).width() > 768) {
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.intro--cta'
      })
      .setClassToggle(".header__nav", "fixed") // add class toggle
      .addTo(controller);
  }
});
