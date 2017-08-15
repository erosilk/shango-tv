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
