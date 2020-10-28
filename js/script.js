
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
          var typed = new Typed(".typing", {
            strings: ["Hamburg", "Barbecue", "Dessert", "Drink", "Chiayi"],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
          });
          var typed = new Typed(".typing-2", {
            strings: ["Hamburg", "Barbecue", "Dessert", "Drink", "Chiayi"],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
          });


           
        });
 