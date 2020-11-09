function addShopping(price, name) {
    var html = $("<tr class='tr'>"    //開始拼接HTML元素，將取到的東西展示到對用的input中
        + "<td>" + name + "</td>"
        + "<td class='myprice'>" + price + "</td>"
        + "<td>"
        + "<input class='minusBtn' type='button' value='-'/>"
        + "<strong class='nums'>1</strong>"
        + "<input class='addBtn' type='button' value='+'/>"
        + "</td>"
        + "<td class='totalprice'></td>"
        + "<td align='center'>"
        + "<input class='deleteBtn' type='button' value='刪除'/>"
        + "</td></tr>");
    $("#goods").append(html);

    $(".deleteBtn").click(function () {
        $(this).closest(".tr").remove();
    })

    $(".addBtn").click(function () {
        var num = parseInt($(this).siblings(".nums").html());
        var newnum = num + 1;
        $(this).siblings(".nums").html(newnum);
        var mytotal = parseInt($(this).closest(".tr").find(".myprice").html()) * newnum;
        $(this).closest(".tr").find(".totalprice").html(mytotal);
    })

    $(".minusBtn").click(function () {
        var num = parseInt($(this).siblings(".nums").html());
        var newnum = num - 1;
        if (newnum === 0) {
            $(this).closest(".tr").remove();
        } else {
            $(this).siblings(".nums").html(newnum);
            var mytotal = parseInt($(this).closest(".tr").find(".myprice").html()) * newnum;
            $(this).closest(".tr").find(".totalprice").html(mytotal);
        }
    })

}

function total() {
    var trs = $("#goods tr");
    var sum = 0;
    for (var i = 0; i < trs.length; i++) {
        var td = trs.eq(i).children().eq(3);
        var price = parseInt($(td).text());
        //alert(price);
        sum = sum + price;

    }
    $("#total").text(sum);
}