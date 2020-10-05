
 
$(function() {
  
    // 手機選單
  $('.m_Hamburg, .log_m_Hamburg').click(function() {
    $('.menu_boxs').addClass ('hovermenu');
    $('.cover').addClass('show');
    scrollLock();
  });
  $('.menu_boxs .icon-x').click(function() {
    $('.menu_boxs').removeClass ('hovermenu');
    $('.cover').removeClass('show');
    scrollUnlock();
  });

  $('.threeMenu').click(function() {
    // $('.lastMenu_boxs').toggleClass ('showMenu');
    $(this).next().toggleClass ('showMenu');
  });

  // // 手機選單模式，背景資訊鎖定
  function scrollLock () {
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var $html = $('html, body'); // it would make more sense to apply this to body, but IE7 won't have that
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

  function scrollUnlock () {
    var $html = $('html, body'); // it would make more sense to apply this to body, but IE7 won't have that
    var scrollPosition = $html.data('scroll-position');
    $html.css('overflow', $html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

});


