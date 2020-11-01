jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
    jQuery('.arrow-up').fadeIn(duration);
    } else {
    jQuery('.arrow-up').fadeOut(duration);
    }
    });
    
    jQuery('.arrow-up').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
    })
    });