$( document ).ready(function() {
    $('.cust').click(function(){
        $('.modal-cust').toggleClass('is-active');
        $('.container').toggleClass('blur');
    });
    $('.trigger2').on('click', function() {
        if($('html').hasClass('light-theme')) {
          $('html').removeClass('light-theme');
          $('html').addClass('dark-theme');
          $('.btn-theme i').removeClass('fa fa-moon-o');
          $('.btn-theme i').addClass('fa fa-sun-o');
        } else {
          $('html').removeClass('dark-theme');
          $('html').addClass('light-theme');
          $('.btn-theme i').removeClass('fa fa-sun-o');
          $('.btn-theme i').addClass('fa fa-moon-o');
        }
     });
        $(".trigger2").on( "click", function() {
          if($('.customize p').hasClass('off')){
            $('.customize p').text("dark theme: on");
            $('.customize p').removeClass('off');
            $('.customize p').addClass('on');
          } else {
            $('.customize p').text("dark theme: off");
            $('.customize p').removeClass('on');
            $('.customize p').addClass('off');
          }
});
});