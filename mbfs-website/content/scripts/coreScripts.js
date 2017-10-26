$(document).ready(function(){
$("#slider > .div:gt(0)").hide();
slideShow();

function slideShow(){

  var current = $('#slider > div:not(:hidden)');
  alert(current.attr('class'));
var next = current.next().length ? current.next() : current.siblings().first();

 current.fadeOut();
 next.fadeIn();

setTimeout(slideShow, 3000);

};

});
