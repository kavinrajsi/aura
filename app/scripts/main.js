$(function () {
  // 'use strict';
  const typed = new Typed('#type', {
    strings: ['Digital Marketing', 'UX/UI Design'],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity
  });

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
      triggerElement: '.intro--cta',
      offset: -120
      })
      .setClassToggle('.header__nav', 'fixed') // add class toggle
      .addTo(controller);
  }
});


$(function(){

  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  console.log('is Chrome ? ', isChrome);

  let scenes = [];
  let y = 0;

  // initial smooth-scrollbar
  let scroll = Scrollbar.init(
    document.querySelector('#container-scroll')
  );


  // initiate ScrollMagic Controller
  let controller =
      new ScrollMagic.Controller(
            {
                refreshInterval: 0,
            }
      );

  // update scrollY controller
  if(isChrome){
    controller.scrollPos(function () {
      return y;
    });
  }


  // listener smooth-scrollbar, update controller
  scroll.addListener(function(status) {

    y = status.offset.y;

    if(isChrome){
      controller.update();
    } else {
      scenes.forEach(function(scene){
             scene.refresh();
      });
    }

  });


});
