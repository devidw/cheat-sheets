$(function() {

  let nextBtn, previousBtn, preview, items, current, positionSpan;
  nextBtn = $('button[name="next"]');
  previousBtn = $('button[name="previous"]');
  preview = $('.carousel-item');
  items = $('.carousel-items').children();
  positionSpan = $('.item-position');
  current = Number(preview.attr('data-num'));
  // console.log(current);

  /**
   * initialize
   */
  carouselPreview(current);

  /**
   * go to next
   */
  nextBtn.click(function() {
    current = (current != items.length - 1) ? current + 1 : 0;
    carouselPreview(current);
  });

  /**
   * go to previous
   */
  previousBtn.click(function() {
    current = (current != 0) ? current - 1 : items.length - 1;
    carouselPreview(current);
  });

  /**
   * @param i {int} number
   * @return {node}
   */
  function getCarouselItem(i) {
    let item;
    item = items.eq(i);
    return item;
  }

  /**
   * @param i {int} number
   */
  function carouselPreview(i) {
    let e, title, body, slogan, color, imgSrc, imgAlt;
    e = getCarouselItem(i);
    title = e.attr('data-title');
    body = e.attr('data-body');
    slogan = e.attr('data-slogan');
    color = e.attr('data-color');
    imgSrc = e.attr('data-img-src');
    imgAlt = e.attr('data-img-alt');

    let h3, bodySpan, sloganSpan, img;
    h3 = preview.find('h3');
    bodySpan = preview.find('.body');
    sloganSpan = preview.find('.slogan');
    img = preview.find('img');

    preview.attr('data-num', i);
    h3.text(title);
    h3.css('color', color);
    bodySpan.text(body);
    sloganSpan.text(slogan);
    sloganSpan.css('color', `${color}c0`);
    img.attr({
      'src': imgSrc,
      'alt': imgAlt
    });

    positionSpan.text(' • '.repeat(i + 1));
  }

});
