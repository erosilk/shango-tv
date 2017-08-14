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
