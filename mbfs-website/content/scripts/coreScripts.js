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

});
