function addevent(){
    $("div.menu>a:gt(0)").bind("click", function(){
        $("div.menu>a:gt(0)[class=fonthighlight]").removeClass("fonthighlight");
        $(this).addClass("fonthighlight");
        var index = $(this).index();
        var $getcomment = $("body>div").eq(index);
        $getcomment.slideDown();
        $("body>div:gt(0)").not($getcomment).slideUp();

        if($(this).index() == 2){
            addMap()
        }
        else{
            clearInterval(inte)
        }
    });
}