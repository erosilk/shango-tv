function squareThumbs() {
  var width = $('.thumb').css('width')
  $('.thumb').css('height', width)
}
squareThumbs()

var lazySquares = _.debounce(squareThumbs, 300)

$(window).resize(lazySquares)

setTimeout(function() {
  $('.proyectos-list').masonry({
    // options
    itemSelector: 'li',
    columnWidth: 0,
    horizontalOrder: true,
  })
}, 100)
