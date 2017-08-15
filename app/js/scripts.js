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

if ($('#home-proyectos')[0]) {
  $(document).ready(function() {
    setTimeout(function() {
      doResizing()
      squarify()
    }, 200)
  })
  var windowResize = _.debounce(doResizing, 200)

  $(window).resize(windowResize)

  $(window).resize(squarify)
}

if ($('#proyectos')[0]) {
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

  $(window).resize(squarify)

  $('.proyectos-list').isotope({
    // options
    itemSelector: '.proyecto',
    layoutMode: 'fitRows',
    transitionDuration: 0,
  })

  var $grid = $('.proyectos-list')

  function filter(tag) {
    $grid.isotope({ filter: tag })
  }

  $('.tags ul li').on('click', function() {
    if (!$(this).hasClass('selected')) {
      var tag = $(this).attr('class')
      filter('.' + tag)
      if (tag === 'todos') {
        filter('')
      }
      $('.tags ul li.selected').removeClass('selected')
      $(this).addClass('selected')
    }
  })
}

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
