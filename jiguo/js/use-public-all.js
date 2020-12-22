    $('.more').on('click',function(){
        $.ajax({
            url:'http://192.168.1.64:3000/useing/public',
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
        $('.content ul').append(dot_tem(date));
        $('.content ul li .show p').each(function(index,item){
            if($(item).text()=='体验师转享'){
                $(item).addClass('gold');
            }
        });
        console.log($('.content ul li .show p').text());
        console.log(date);
    }

    $('.title-box .nav1 ul li:eq(0)').on('click',function(){
        window.location.href = './../use/use-public-all.html'
    });
    $('.title-box .nav1 ul li:eq(1)').on('click',function(){
        window.location.href = './../use/use-engineer.html';
    });

    $('.nav2 ul li:eq(0)').on('click',function(){
        window.location.href = './../use/use-public-all.html'
    });
    $('.nav2 ul li:eq(1)').on('click',function(){
        window.location.href = './../use/use-public-apply.html';
    });
    $('.nav2 ul li:eq(2)').on('click',function(){
        window.location.href = './../use/use-public-using.html';
    });
    $('.nav2 ul li:eq(3)').on('click',function(){
        window.location.href = './../use/use-public-end.html';
    });

    // 点击跳转详情页
    $('.content ul li').on('click',function(){
        window.open('./../use/detail.html');
    })

    //返回顶部
    $('.back').click(function(){
        $('body,html').animate({
            scrollTop: 0
        },700)
    })