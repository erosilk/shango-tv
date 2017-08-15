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

$('.menu-toggle-icon').on('click', function() {
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

function doResizing() {
  setTimeout(function() {
    $('.proyectos-list').masonry({
      // options
      itemSelector: 'li',
      columnWidth: 0,
      horizontalOrder: true,
    })
  }, 100)
}
function squarify() {
  var width = $('.thumb').css('width')
  $('.thumb').css('height', width)
}
doResizing()
squarify()

var windowResize = _.debounce(doResizing, 200)

$(window).resize(windowResize)

$(window).resize(squarify)

$('.carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
})

$('.footer-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
})
