$(function(){
    $('.searchRegister #register').on('click',function(){
        window.location.href = './regist.html';
    });
    $('.toRegister p').on('click',function(){
        window.location.href = './regist.html';
    });
    function mark(){
        var f_date = new Date("11 26,2020").getTime();
        var n_date = new Date().getTime();
        var day = Math.floor((f_date - n_date)/1000/60/60/24);
        var hours = Math.floor((f_date - n_date)/1000/60/60%24);
        var minutes = Math.floor((f_date - n_date)/1000/60%60);
        var seconds = Math.floor((f_date - n_date)/1000%60);
        $('.show .time').html('申请时间剩余：'+day+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒');
    }
    mark();
    setInterval(mark,1000);

    setTimeout(function(){
        $('.showBox .show .text').fadeIn('slow');
    },600);

    var blingbling = '';
    setTimeout(function(){
        blingbling = setInterval(function(){
            $('.showBox .show .text .applyOnTime .cover').fadeToggle('slow')
        },20);
    },1200);

    $('.showBox .show .text .applyOnTime .cover').on('mouseenter',function(){
        $('.showBox .show .text .applyOnTime .cover').hide();
    });

    //轮播图
    $inner = $('.inner');
    $banLi = $('.inner li');
    $timer = null;
    $timer2 = null;
    $index = 1;
    $inner.scrollLeft($('.inner li:first').width());
    function autoPlay(){
        $timer = setInterval(function(){
            clearInterval($timer2);
            $index++;
            if($index >= $banLi.toArray().length){
                $index = 1;
                $inner.scrollLeft('0');
            }
            
            $step = 0;  //开始步数
            $maxStep = 50;  //最大步数
            $start = $inner.scrollLeft();  //开始位置
            $end = ($('.inner li:first').width()) * $index;  //结束位置
            $everyStepDist = ($end - $start) / $maxStep;  //每一步距离
            $timer2 = setInterval(function(){
                $step++;
                if($step >= $maxStep){
                    $step = 0;
                    clearInterval($timer2);
                }
                $start += $everyStepDist;
                $inner.scrollLeft($start);
            },10);
        },2000);
    }
    autoPlay();
    $('.arrow .arrowLeft').on('click',function(){
        clearInterval($timer2);
        clearInterval($timer);
        var num = $('.banner .inner .con').scrollLeft();
        var count = num + 1000;
        $('.banner .inner .con').css({
            'transform':'translateX('+ count +'px)',
            'transition':'all 1s'
        });
        // setTimeout(function(){
        //     autoPlay();
        // },1000);
    });
    $('.arrow .arrowRight').on('click',function(){
        clearInterval($timer2);
        clearInterval($timer);
        var num = $('.banner .inner .con').scrollLeft();
        var count = num - 500;
        $('.banner .inner .con').css({
            'transform':'translateX('+ count +'px)',
            'transition':'all 1s'
        });
        setTimeout(function(){
            autoPlay();
        },1000);
    });


    //加载更多
    $('.more').on('click',function(){
        $.ajax({
            url:'http://192.168.1.64:3000/play/hot',
            success:function(res){
                $('#more').hide();
                $('#loading').show();
                setTimeout(function(){
                    $('#loading').hide();
                    $('#finish').show();
                    inHtml(res);
                },2000);
            }
        });
    });
    function inHtml(date){
        var dot_tem = doT.template($('#list_template').text());
        $('.play ul').append(dot_tem(date));
    }

    //登陆
    $('#login').on('click',function(){
        $('.loginBox').show();
    });
    $('.loginBox .loginShow .del').on('click',function(){
        $('.loginBox').hide();
    });
    $('.loginShow .loginBtn button').on('click',function(){
        var userName=$('#username').val();
        var password=$('#password').val();
        $.ajax({
            type:"post",
            url: "http://192.168.1.64:3000/users/login",
            data: "&username=" + userName + "&password=" + password,
            success: function(res){
                if(userName == '' || password == ''){
                    alert('用户名或密码不能为空');
                }else if(res.msg != '登录成功！'){
                    alert(res.msg);
                }else{
                    alert(res.msg);
                    $('.loginBox').hide();
                }
            }
        });
    });
})

$('.reg').on('click',function(){
    window.open('./regist.html');
})

//返回顶部
$('.back').click(function(){
    $('body,html').animate({
         scrollTop: 0
    },700)
})