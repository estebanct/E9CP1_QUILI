$(".article").eq(3)
    .children(".article__body")
    .children("ul")
    .children("li:last")
    .html("<a href='https://pinterest.com' > Pinterest </a>");

$("a[href= '#']").on("click", function(event){
    event.preventDefault()
    })


