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


  $('#free-call-form').submit(function (e) {
    e.preventDefault();
    // var valid;
    // valid = validateContact();
    // if(valid) {
    $.ajax({
      url: 'mail.php',
      data: 'username=' +
        $('#username').val() +
        '&email=' +
        $('#email').val() +
        '&phoneNumber=' +
        $('#phoneNumber').val(),
      type: 'POST',
      success: function (data) {
        $('#mail-status').html(data);
        $('#free-call-form')[0].reset();
      },
      error: function (data) {
        $('#mail-status').html(data);
      }
    });
    // }
  });

  // pdf download


  $('#download-form').submit(function (e) {
    e.preventDefault();
    // var valid;
    // valid = validateContact();
    // if(valid) {
    $.ajax({
      url: 'download.php',
      data: 'download_username=' +
        $('#download_username').val() +
        '&download_email=' +
        $('#download_email').val() +
        '&download_phoneNumber=' +
        $('#download_phoneNumber').val(),
      type: 'POST',
      success: function (data) {
        $('#mail-status-download').html(data);
        $('#download-form')[0].reset();
      },
      error: function (data) {
        $('#mail-status-download').html(data);
      }
    });
    // }
  });


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
