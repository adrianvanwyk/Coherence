$(document).ready(function() {
  function bslideShow() {
    $("#slider > div:gt(0)").hide();
  };

  function slideShow() {
    var current = $('#slider > div:not(:hidden)');
    current.css('z-index', '1');
    var next = current.next().length ? current.next() : current.siblings().first();
    next.css('z-index', '0').show();
    current.fadeOut();

  };
  bslideShow();
  setInterval(slideShow, 5000);


  $('.quickQuote-buttonGroup').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    arrowShape: {
      x0: 10,
      x1: 40,
      y1: 50,
      x2: 80,
      y2: 50,
      x3: 50
    }
  });


  $('.circle-button').click(function() {
    console.log('clicked' + $(this).attr('class'))
  })


});
