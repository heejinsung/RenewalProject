$(function () {
  //   //네비게이션메뉴
  //   $('.Navbar_btn').click(function () {
  //     $('.Nav_menu').toggleClass('active');
  //     $('.Nav_rightmenu').toggleClass('active');
  //   });

  //   $('.MenuCate li').click(function () {
  //     if ($(this).hasClass('active')) {
  //       $(this).find('.submenu').slideUp(300);
  //       $(this).removeClass('active');
  //     } else {
  //       $(this).find('.submenu').slideDown(300);
  //       $(this).addClass('active');
  //     }
  //   });

  //slide product
  $('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //-----showroom slide
  let current = 0;
  const imgs = $('.stslidebox img');
  let indicators = [];

  //인디케이터 생성
  for (let i = 0; i < imgs.length; i++) {
    indicators = `<a href="#" value="${i}"></a>`;
    $('.indicator').append(indicators);
  }

  function slider(eq) {
    $('.stslidebox').animate({ left: -100 * eq + '%' }, 300);
    current = eq; //a의 index랑 같음
    $('.indicator').find('a').removeClass('active');
    $('.indicator').find('a').eq(current).addClass('active');

    $('.txtbox').find('h2').hide();
    $('.txtbox').find('h2').eq(current).show();
    $('.location').find('.Loslide').hide();
    $('.location').find('.Loslide').eq(current).show();
  }

  //네비게이션 클릭 시 슬라이드 이동
  $('button').click(function () {
    if ($(this).hasClass('prev')) {
      if (current == 0) {
        return false;
      } else {
        slider(current - 1);
      }
    } else {
      if (current >= imgs.length - 1) {
        return false;
      } else {
        slider(current + 1);
      }
    }
  });

  $('.indicator a').click(function () {
    let indicatorIdx = $(this).attr('value');
    slider(indicatorIdx);
  });

  slider(0);
});
