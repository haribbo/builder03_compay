$(document).ready(function() {

  var up_btn = $('.btn_up');
  var page_move_btn = $('.move_page_click');
  var mobile_btn = $('.mobile_btn');
  var nav = $('.main_nav').find('ul');
  var shape_br;

  init();

  function init() {
    if($(window).width() > 900) {
      remove();
    }
  }

  //mobile_btn
  mobile_btn.click(function(){
  nav.toggleClass("view");
  });

  up_btn.click(function(event) {
    window_up(event);
  });

  function remove() {
    $('.mobile_br').remove();
  }

  page_move_btn.click(function() {
    const idx = page_move_btn.index(this);
    setTimeout(function() {
      move_page(idx);
    }, 500);
  });

  // functions
  function window_up(taget) {
    taget.preventDefault();
    $('html,body').stop().animate({
      scrollTop: 0
    }, 500, 'swing');
  }

  function move_page(idx) {
    const pointer = page_move_btn.eq(idx).attr('data');
    const page_name = "business.html";
    const src = page_name + pointer;
    window.location = src;
  }

  // ******************aboutPage Script (side_menu) ************************
  var pos = $('.side-menu-cover');
  var target_menu = $('#fixed_side_menu');
  var isFixed = target_menu.hasClass('fixed');
  var article;

  $(document).scroll(function() {
    if (target_menu.length != 0) {
      const win_top = $(this).scrollTop();
      const menu_pos = pos.offset().top;
      article = $('article');
      fixed_side_menu(win_top, menu_pos);
      fos_check();
    }
  });

  target_menu.find('li').click(function() {
    var idx = $(this).index();
    move_fos(idx);
  });

  function fixed_side_menu(win, menu) {
    if (win > menu && isFixed == false) {
      console.log("고정");
      target_menu.addClass('fixed');
      isFixed = !isFixed
    }
    if (win < menu && isFixed == true) {
      console.log("고정풀음");
      target_menu.removeClass('fixed');
      isFixed = !isFixed
    }
  }

  function move_fos(idx) {
    const offset_pos = article.eq(idx).offset().top * 0.93;
    $('html,body').stop().animate({
      scrollTop: offset_pos
    }, 500, 'swing');
  }

  function fos_check() {
    article.each(function(e) {
      var idx = $(this).index();
      if ($('html,body').scrollTop() >= article.eq(e).offset().top &&
        $('html,body').scrollTop() < article.eq(e).offset().top + $(this).height()) {
        target_menu.find('li').removeClass('active');
        target_menu.find('li').eq(e).addClass('active');
        return false;
      }
    })
  }
    // ******************aboutPage Script (side_menu) ************************

});
