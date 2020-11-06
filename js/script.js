
$(document).ready(function ()
{ 
           //toggle menu/navbar script
           $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass('active');
            $('.menu-btn i').toggleClass('active');
          });
          
            $(window).scroll(function () {
                if (this.scrollY > 90) {
                  $('.navbar_B').addClass("sticky");
                  $('.navbar_A').addClass("sticky");
                  $ ('.logo ').addClass("sticky");
                } else {
                  $('.navbar_B').removeClass("sticky");
                  $('.navbar_A').removeClass("sticky");
                  $('.logo ').removeClass("sticky");
                  
                 }
            })

// typing Animation script
         


        
           
        });
 