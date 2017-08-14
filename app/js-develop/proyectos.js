function doResizing() {
  var width = $('.thumb').css('width')
  $('.thumb').css('height', width)
  $('.proyectos-list').masonry({
    // options
    itemSelector: 'li',
    columnWidth: 0,
    horizontalOrder: true,
  })
}
doResizing()

var windowResize = _.debounce(doResizing, 300)

$(window).resize(windowResize)
