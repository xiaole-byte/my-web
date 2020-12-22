$('.more').on('click',function(){
//   $('.more').css({background:'url(./../img/loading-icon.gif) no-repeat 450px' }).html('正在加载')
    $.ajax({
        url:'http://192.168.1.64:3000/play/hot',
        success:function(res){
            var data = res[2];
            var dot_tem = doT.template($('#new').text());
            $('.box1').html(dot_tem(data));
            // $('.more').hide();
            // $('.more').css({background:'url(./../img/loading-icon.gif) no-repeat 450px' }).html('正在加载').show();
            console.log(data);
        },
        dataType:'json',
        // timeout:1500
    })
   
})
//返回顶部
$('.back').click(function(){
    $('body,html').animate({
         scrollTop: 0
    },700)
})
