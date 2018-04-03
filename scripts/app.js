'use strict';

var ShadowScroll = {
  setScroll: function setScroll() {
    var scroll = $(window).scrollTop();
    var wheight = $(window).height();
    var wpercents = scroll / (wheight / 100);
    var opacity = wpercents / 100 * 1.5;
    opacity > 1 ? opacity = 1 : '';
    var $curtain = $('.js-curtain');
    $curtain.css({
      'background-color': 'rgba(0, 0, 0, ' + opacity + ')'
    });
  },
  init: function init() {
    var t = this;
    t.setScroll();
    $(window).on('scroll resize', function (e) {
      t.setScroll();
    });
  }
};

var ShowScroll = {
  onScroll: function onScroll() {
    var scroll = $(window).scrollTop();
    var wheight = $(window).height();
    var scrollBottom = scroll + wheight;
    $('.js-show').each(function () {
      var $this = $(this);
      var center = $this.offset().top + $this.outerHeight() / 2;
      if (center < scrollBottom) {
        $this.addClass('isShown');
      } else {
        $this.removeClass('isShown');
      }
    });
  },
  init: function init() {
    var t = this;
    t.onScroll();
    $(window).on('scroll resize', function (e) {
      t.onScroll();
    });
  }
};

var NavScroll = {
  init() {
    $('.js-scroll-about').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(window).height() * 0.9
      });
    });
    $('.js-scroll-contact').on('click', function(e){
      e.preventDefault();
      var maxScroll = $(document).height() - $(window).height();
      var contactsTop = $('.js-contacts').offset().top;
      $('html, body').animate({
        scrollTop: contactsTop > maxScroll ? maxScroll : contactsTop
      });
    });
  }
}

$(function () {
  ShadowScroll.init();
  ShowScroll.init();
  NavScroll.init();
});
//# sourceMappingURL=app.js.map
