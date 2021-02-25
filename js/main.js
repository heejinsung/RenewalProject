

$(".Navbar_btn").click(function(){
   $(".Nav_menu").toggleClass("active");
   $(".Nav_rightmenu").toggleClass("active");
})

$('.MenuCate li').click(function() {
   if ( $(this).hasClass('active') ) {
       $(this).find('.submenu').slideUp(300);
       $(this).removeClass('active');
   }
   else {
       $(this).find('.submenu').slideDown(300);
       $(this).addClass('active');
   }
});