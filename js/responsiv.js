$(function (){
   isNavBarHeaderHidden = true;
   navBarHeight = $('body > header nav .nav_bar').height();
   $('#menu_icon').click(function (){
       if(isNavBarHeaderHidden){
      $('body > header nav .nav_bar').css('height','0px');
      $('body > header nav .nav_bar').show();
      $('body > header nav .nav_bar').animate({
           height: navBarHeight
       },200);
        isNavBarHeaderHidden = false;
        }
        else{
            $('body > header nav .nav_bar').animate({
                height: '0px'
            },200, function (){
                $('body > header nav .nav_bar').hide();
            });
            isNavBarHeaderHidden = true;
        }
   });
});