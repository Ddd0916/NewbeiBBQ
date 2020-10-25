$(document).ready(function ()
{
    //右邊
    $('.li-grid').click(function ()
    {
        $('.li-grid').toggleClass('active');
        $('.li-list').removeClass('active');
        $('.grid-view2').css('display', 'none')
        $('.list-view').css('display','block')
    });


    //左邊
    $('.li-list').click(function ()
    {
        $('.li-list').toggleClass('active');
        $('.li-grid').removeClass('active');
        $('.list-view').css('display', 'none')
        $('.grid-view2').css('display','block')
    });
});