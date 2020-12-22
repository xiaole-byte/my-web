$(function(){
    var releaseScroll = function(e){
        e.preventDefault();
    }
    $('.list>li>a').each(function(index,item){
        touch.on(item,'tap',function(){
            //导航字体改变
            $('.list>li>a').css('color','rgb(102,102,102)');
            $(this).css('color','#ff8a00');
            // 阻止页面滚动
            document.body.addEventListener('touchmove',releaseScroll, { passive: false });
                //板块出现
                $('.down').hide();
                $('.down').eq(index).slideDown('fast');
                $('.hid').fadeIn('fast');
                 //箭头改变
                 $('.up').hide();
                $('.down1').show();
                $(item).parent().find('.arrow-down .up').show();
                $(item).parent().find('.arrow-down .down1').hide();
        });
    });
    touch.on($('.hid'),'tap',function(){
        //板块隐藏，蒙版隐藏
        $('.down').slideUp('fast');
        $('.hid').fadeOut('fast');
        //导航字体改变
        $('.nav>li>a').css('color','#666666');
        //箭头朝上
        $('.down1').show();
        $('.up').hide();
        //释放页面滚动
        document.body.removeEventListener('touchmove',releaseScroll);
    });
    
    //区域单选
    $('.area .right ul li a').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.area .right ul li a').css('color','#666666');
            $(item).css('color','#ff8a00');
        });
    });

    //价格单选
    $('.area1 li a').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.area1 li a').css('color','#666666');
            $(item).css('color','#ff8a00');
        });
    });

    //房型单选框
    $('.area2 li .s2').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.area2 li:eq(0)').find('a').css('color','rgb(102,102,102)');
            $('.ok').hide();
            $('.area2 li .s2').css('border-color','#878787');
            $(item).find('.ok').show();
            $(item).css('border-color','#ff8a00');
        });
        touch.on($('.area2 li:eq(0) a'),'tap',function(){
            $(this).css('color','#ff8a00');
            $('.ok').hide();
            $('.area2 li .s2').css('border-color','#878787');
        });
    });

    //更多单选
    $('.area3 .house ul li a').each(function(index,item){
        touch.on($('.area3 .house').eq(index).find('ul li a'),'tap',function(){
            $('.area3 .house ul li a').css({
                'color':'#878787',
                'border-color':'rgb(201,201,201)'
            });
            $(this).css({
                'color':'#ff8a00',
                'border-color':'#ff8a00'
            });
        });
    });
});
