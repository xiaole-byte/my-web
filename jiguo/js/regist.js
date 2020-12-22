$(function(){
    //手机号
    var phoneStr = /^1[3|4|5|7|8][0-9]{9}$/;
    //用户名
    var userNameStr = /^[0-9a-zA-Z_]{4,8}$/;
    //密码
    var passwordStr = /^[0-9a-zA-Z_]{6,12}$/;

    //验证码按钮
    var $code = $('.get-code');
    $code.on('click',function(){
        $code.attr('disabled',true);
        var i = 60;
        $code.html(i + '秒之后获取验证码');
        var time = setInterval(function(){
            i--;
            $code.html(i + '秒之后获取验证码');
            if(i == 0){
                clearInterval(time);
                i = 60;
                $code.attr('disabled',false);
                $code.html('重获验证码');
            }
        },1000);
	});
    $('#phone-number').on('blur',function(){
        if($('#phone-number').val() == '' || phoneStr.test($('#phone-number').val())==false){
            $('.infoPhone').show();
        }else{
            $('.infoPhone').hide();
        }
    });
    $('#img-code').on('blur',function(){
        if($('#img-code').val() != 'r2b7'){
            $('.infoCode1').show();
        }else{
            $('.infoCode1').hide();
        }
    });
    $('#get-code').on('blur',function(){
        if($('#get-code').val() == ''){
            $('.infoCode2').show();
        }else{
            $('.infoCode2').hide();
        }
    });

    $('#username').on('blur',function(){
        if($('#username').val() == '' || userNameStr.test($('#username').val())==false){
            $('.infoUser').show();
        }else{
            $('.infoUser').hide();
        }
    });
    $('#password').on('blur',function(){
        if($('#password').val() == '' || passwordStr.test($('#password').val())==false){
            $('.infoPass').show();
        }else{
            $('.infoPass').hide();
        }
    });

    $('.regist').on('click',function(){
        var phoneNumber = $('#phone-number').val();
        var imgCode = $('#img-code').val();
        var code = $('#get-code').val();
        var userName=$('#username').val();
        var password=$('#password').val();
        var rePassword=$('#re-password').val();
        $.ajax({
            type:"post",
            url: "http://192.168.1.64:3000/users/register",
            data: "phone=" + phoneNumber + "&code=" + imgCode + "&userName=" + userName + "&password=" + password,
            success: function(res){
                if($('#re-password').val() != $('#password').val() || $('#re-password').val() == ''){
                    $('.infoRePass').show();
                }else{
                    window.location.href = './index.html';
                }
            }
        });
    });
});