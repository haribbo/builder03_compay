$(document).ready(function () {
   const up_btn = $('.btn_up');
   
   up_btn.click(function(event){
      console.log("click");
      window_up(event);
   });
   
   function window_up(taget) {
      taget.preventDefault();
      $('html,body').stop().animate({
         scrollTop: 0
      }, 500, 'swing');
   }
});
