function setcss(){
    $("div.menu>a:gt(0)").css("padding-left", "55px")
    .css("margin-top", "25px")
    .css("height", "50px")
    .css("line-height", "50px");

    $("div.menu>a:gt(0):first").css("margin-top", "50px");
    $("body>div:gt(0)").css({
        "border-width": "5px",
        "border-style": "solid",
        "border-color": "#007e7e",
        "margin-left": "50px",
        "width": "1500px",
        "height": "850px",
        "position": "absolute",
        "top": "50px"
    });

    $(".information>, .hobby>").css("width", "450px")
                    .css("margin-left", "50px");

    $(".information>h2, .hobby>h2").css("text-indent", "2em");

    $(".hobby>img").css("width", "140px")
                    .css("margin-left", "70px");

    $(".course>h1").css("position", "absolute")
                    .css("top", "50px")
                    .css("left", "1000px")

    $("#difficult>img").css("position", "relative")
                        .css("left", '180px')
}