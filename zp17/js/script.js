$(function() {


  $('details').click(function() {
    event.preventDefault();
  })

  $('button[name=next]').click(function() {
    let parent, first, middle, last;
    parent = $('.cards-x');
    // right card
    last = $('.cards-x').children().eq(2);
    last.children('details').attr('open', false);
    // move right card to left
    parent.prepend(last);
    // open centered card details area
    middle = $('.cards-x').children().eq(1);
    middle.children('details').attr('open', true);

    last = $('.cards-x').children().eq(2);
    last.children('details').attr('open', false);
    first = $('.cards-x').children().eq(0);
    first.children('details').attr('open', false);
  });


})
