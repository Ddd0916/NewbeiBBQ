
        $(document).ready(function () {
            $(window).scroll(function () {
                if (this.scrollY > 20) {
                    $ ('.navbar').addClass("sticky");
                } else {
                   $ ('.navbar').removeClass("sticky");
                 }
            })
          
          // login縮小
            $(window).scroll(function () {
              if (this.scrollY > 20) {
                  $ ('.Sign-in ').addClass("sticky");
              } else {
                 $ ('.Sign-in ').removeClass("sticky");
               }
          })
          

            //toggle menu/navbar script
            $('.menu-btn').click(function(){
              $('.navbar .menu').toggleClass('active');
              $('.menu-btn i').toggleClass('active');
            });
        });
 