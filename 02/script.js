var pint = $("body article:nth-child(5) ul li:nth-child(4) a");
    pint.text("Pinterest");
    pint.prop('href', 'https://pinterest.com');

$("a[href = '#']").on("click", function(event){
    event.preventDefault()
    })


 $(".header__main > h2").ready(function () {
    var size = $(".header__main h2").css("font-size");
    size = parseInt(size);
    var new_size = size * 2;
     $(".header__main h2").css("font-size", new_size + "px");
    })