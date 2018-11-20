$(".article").eq(3)
    .children(".article__body")
    .children("ul")
    .children("li:last")
    .html("<a href='https://pinterest.com' > Pinterest </a>");

$("a[href= '#']").on("click", function(event){
    event.preventDefault()
    })


 $(".header__main > h2").ready(function () {
    var size = $(".header__main h2").css("font-size");
    size = parseInt(size);
    var new_size = size * 2;
     $(".header__main h2").css("font-size", new_size + "px");
    })