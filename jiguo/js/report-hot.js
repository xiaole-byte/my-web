$(function(){
    $('.searchRegister>span').on('click',function(){
        window.location.href = './../regist.html';
    });
    $('.more').on('click',function(){
        $.ajax({
            url:'http://192.168.1.64:3000/report/hot',
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
        $('.content ul').append(dot_tem(date))
        console.log(date);
    }
    $('.title-box .nav ul li:eq(0)').on('click',function(){
        window.location.href = './../report/report-new.html'
    });
    $('.title-box .nav ul li:eq(1)').on('click',function(){
        window.location.href = './../report/report-hot.html';
    });
    //返回顶部
    document.addEventListener("scroll",function(){
        $('.returnUp').show();
    });
    $('.returnUp').on('click',function(){
        document.documentElement.scrollTop = 0;
    });
});
$('.login').on('click',function(){
    window.open('login.html');
});
$('.reg').on('click',function(){
    window.open('regist.html')
})

//返回顶部
$('.back').click(function(){
    $('body,html').animate({
         scrollTop: 0
    },700)
})