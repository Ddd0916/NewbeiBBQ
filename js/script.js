
        $(document).ready(function () {
            $(window).scroll(function () {
                if (this.scrollY > 20) {
                    $ ('.navbar').addClass("sticky");
                } else {
                   $ ('.navbar').removeClass("sticky");
                 }
            })
          
          // login消失
            $(window).scroll(function () {
              if (this.scrollY > 20) {
                  $ ('.Sign-in ').addClass("sticky");
              } else {
                 $ ('.Sign-in ').removeClass("sticky");
               }
          })
          

// typing Animation script
          var typed = new Typed(".typing", {
            strings: ["Taiwan", "Kaohsiung", "Tainan", "Changhua", "Chiayi"],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
          });
          var typed = new Typed(".typing-2", {
            strings: ["Taiwan", "Kaohsiung", "Tainan", "Changhua", "Chiayi"],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
          });


            //toggle menu/navbar script
            $('.menu-btn').click(function(){
              $('.navbar .menu').toggleClass('active');
              $('.menu-btn i').toggleClass('active');
            });
        });
 