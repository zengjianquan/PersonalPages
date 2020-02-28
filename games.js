function play_game(){
        $('#jieni').css("display", 'none')
        $("#chonga").click(function(){
            $("#jieni").css('display', "")
            $("#chonga").css("display", "none")
            game()
            return false
        })

        $("#return").mouseover(function(){
            $("#return img").attr("src", "img/baizheshichen2.png")
        })
        $("#return").mouseout(function(){
            $("#return img").attr("src", "img/baizheshichen1.png")
        })
        $("#return").click(function(){
            $('.jinglingqiu2').remove()
            $("#jieni").css("display", 'none')
            $("#chonga").css("display", "")
            $("#cai").remove()
            $("#niu").remove()
            $("#killerqueen").remove()
            $(".score:not(#dian)").attr("src", 'img/0.png')
            $("#difficult").css("height", '0px')
        })

        function game(){
            var left = false
            var right = false
            $(document).keydown(function(event){
                if(event.keyCode == 39 || event.keyCode == 68){
                    left = true
                    $("#jieni").attr("src", 'img/jieni4_1.png')
                }
                if(event.keyCode == 37 || event.keyCode == 65){
                    right = true
                    $("#jieni").attr("src", 'img/jieni4.png')
                }
            })
            $(document).keyup(function(event){
                if(event.keyCode == 39 || event.keyCode == 68){
                    left = false
                }
                if(event.keyCode == 37 || event.keyCode == 65){
                    right = false
                }
            })
            var move_jieni = setInterval(function(){
                if(left){
                    if(parseInt($("#jieni").css("left")) < 700){
                        var leftpx = parseInt($("#jieni").css("left")) + 5 + 'px'
                        $("#jieni").css("left", leftpx)
                    }
                }
                if(right){
                    if(parseInt($("#jieni").css("left")) > 0){
                        var rightpx = parseInt($("#jieni").css("left")) - 5 + 'px'
                        $("#jieni").css("left", rightpx)
                    }
                }
            }, 10)

            var timer = 0
            var times = 0
            var creat_ball = setInterval(function(){
                if($(".jinglingqiu2").length <= 5){
                    var $img = $("<img src='img/jinglingqiu2.png', class='jinglingqiu2'>")
                    $("#games").append($img)
                    if (times <= 5){
                        var left_px = parseInt(Math.random() * 700) + 'px'
                        $(".jinglingqiu2").eq(timer % 6).css("left", left_px)
                    }
                    else{
                        var left_px = parseInt(Math.random() * 700) + 'px'
                        $(".jinglingqiu2").eq(5).css("left", left_px)
                    }
                }
                times ++
                timer ++
            }, 300)


            var time0 = 0
            var time1 = 0
            var time3 = 0
            var time4 = 0
            var move_ball = setInterval(function(){
                    for(var i = 0; i < $(".jinglingqiu2").length; i ++){
                        var top_ball = parseInt($(".jinglingqiu2").eq(i).css("top"))
                        var left_ball = parseInt($(".jinglingqiu2").eq(i).css("left"))
                        var width_ball = parseInt($(".jinglingqiu2").css("width"))
                        var height_ball = parseInt($(".jinglingqiu2").css("height"))

                        var top_jieni = parseInt($("#jieni").css("top"))
                        var left_jieni = parseInt($("#jieni").css("left"))
                        var width_jieni = parseInt($("#jieni").css("width"))
                        var height_jieni = parseInt($("#jieni").css("height"))

                        var toppx = top_ball + 5 + 'px'
                        $(".jinglingqiu2").eq(i).css("top", toppx)
                        if(parseInt($(".jinglingqiu2").eq(i).css("top")) == 750){
                            $(".jinglingqiu2").eq(i).remove()
                        }
                        if((left_jieni + 30)>left_ball+width_ball||((left_jieni - 30)+width_jieni)<left_ball||(top_jieni + 10)>top_ball+height_ball){
                        }
                        else{
                            // console.log(i)
                            // console.log(left_jieni)
                            // console.log(left_ball)
                            // console.log(top_ball)
                            clearInterval(move_ball)
                            clearInterval(creat_ball)
                            clearInterval(move_jieni)
                            clearInterval(slidedown)
                            $(document).unbind('keydown')
                            var $cai = $("<img src='img/cai.png' id='cai'>")
                            $cai.css('width', '400px')
                                .css('position', "absolute")
                                .css("left", '200px')
                                .css('top', '150px')
                                .css('display', 'none')
                                .css("z-index", '2')
                            $('#games').append($cai)
                            $cai.fadeIn(500)

                            
                            var $return = $("<img src='img/baizheshichen1.png' id='killerqueen'>")
                            $return.css("width", "250")
                                    .css('position', "absolute")
                                    .css("left", '810px')
                                    .css('top', '670px')
                            $('#return').append($return)
                        }
                    }
                    time4 ++
                    if(time4 == 10){
                        time4 = 0
                        time3 ++
                        var src4 = 'img/' + time4 + '.png'
                        var src3 = 'img/' + time3 + '.png'
                        $(".score:eq(4)").attr("src", src4)
                        $(".score:eq(3)").attr("src", src3)
                        if(time3 == 10){
                            time3 = 0
                            time1 ++
                            var src3 = 'img/' + time3 + '.png'
                            var src1 = 'img/' + time1 + '.png'
                            $(".score:eq(3)").attr("src", src3)
                            $(".score:eq(1)").attr("src", src1)
                            if(time1 == 10){
                                time1 = 0
                                time0 ++
                                var src1 = 'img/' + time1 + '.png'
                                var src0 = 'img/' + time0 + '.png'
                                $(".score:eq(1)").attr("src", src1)
                                $(".score:eq(0)").attr("src", src0)
                                if(time0 == 10){
                                    clearInterval(move_ball)
                                    clearInterval(creat_ball)
                                    clearInterval(move_jieni)
                                    $(document).unbind('keydown')

                                    var $niu = $("<img src='img/niu.png' id='niu'>")
                                    $niu.css('width', '400px')
                                        .css('position', "absolute")
                                        .css("left", '200px')
                                        .css('top', '150px')
                                        .css('display', 'none')
                                    $('#games').append($niu)
                                    $niu.fadeIn(500)

                                    var $return = $("<img src='img/baizheshichen1.png' id='killerqueen'>")
                                    $return.css("width", "250")
                                            .css('position', "absolute")
                                            .css("left", '810px')
                                            .css('top', '670px')
                                    $('#return').append($return)
                                    $(".score:not(#dian)").attr("src", 'img/9.png')
                                }
                            }
                        }
                    }
                    else{
                        var src4 = 'img/' + time4 + '.png'
                        $(".score:eq(4)").attr("src", src4)
                    }
                }, 10)

                var slidedown = setInterval(function(){
                    if(parseInt($("#difficult").css("height")) <= 440){
                        var height = parseInt($("#difficult").css("height"))
                        var addheight = height + 1 + 'px'
                        $("#difficult").css("height", addheight)
                        console.log(height)
                    }
                }, 100)
        }
}