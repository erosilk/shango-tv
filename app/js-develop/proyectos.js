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

$(document).ready(function() {
  setTimeout(function() {
    doResizing()
    squarify()
  }, 200)
})

var windowResize = _.debounce(doResizing, 200)

$(window).resize(windowResize)

$(window).resize(squarify)
