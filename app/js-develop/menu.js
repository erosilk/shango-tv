$(window).resize(function() {
  var width = $(this).width()
  var height = $(this).height()
})

$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd =
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName)
    })
    return this
  },
})

$('.menu-btn').on('click', function() {
  if ($('.menu').css('display') === 'none') {
    $('.menu').css('display', 'block')
    $('.menu').animateCss('slideInRight')
    return
  }
  $('.menu').css('display', 'none')
})

$('.menu-close').on('click', function() {
  $('.menu').css('display', 'none')
})
