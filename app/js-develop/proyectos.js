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
