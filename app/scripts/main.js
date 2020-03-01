$(function () {
  // typing
  // 'use strict';
  var typed = new Typed('#type', {
    strings: ['Digital Marketing', 'UX/UI Design'],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity
  });

  console.log('before');

// mobile cta enable
  var controller = new ScrollMagic.Controller();
  if ($(document).width() < 768) {
    console.log('<768');
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
    console.log('>768');
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.intro--cta',
        offset: -120
      })
      .setClassToggle('.header__nav', 'fixed') // add class toggle
      .addTo(controller);
  }

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

  // enq form
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

  // pdf download form
  $('#download-form').submit(function (e) {
    e.preventDefault();
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
  });

  // slider arrow control
  var checkitem = function() {
    var $this;
    $this = $('#testimonialControls .carousel-inner');
    if ($('#testimonialControls .carousel-inner .carousel-item:first').hasClass('active')) {
      $this.next('.carousel-control').children('.carousel-control-prev').addClass('opacity');
    } else if ($('#testimonialControls .carousel-inner .carousel-item:last').hasClass('active')) {
      $this.next('.carousel-control').children('.carousel-control-next').addClass('opacity');
    } else {
      $this.next('.carousel-control').children().removeClass('opacity');
    }
  };

  checkitem();
  // $('#testimonialControls').on('slid.bs.carousel', '', checkitem);
});
