$(window).resize(function() {
  var width = $(this).width()
  var height = $(this).height()
  if (width < 750) {
  }
})

$('.menu-toggle-icon').on('click', function() {
  if ($('.menu').css('display') === 'none') {
    $('.menu').css('display', 'block')
    return
  }
  $('.menu').css('display', 'none')
})

$('.menu-close').on('click', function() {
  $('.menu').css('display', 'none')
})
