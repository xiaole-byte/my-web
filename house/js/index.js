// ad关闭广告
var colse=document.getElementsByClassName('colse')[0].getElementsByTagName('img')[0];
var ad=document.getElementsByClassName('ad')[0];
colse.addEventListener('touchstart',function(){
    ad.style.display='none';
})

// 热门关注tab切换
touch.on($('.links li a:eq(0)'),'tap',function(){
    $(this).addClass('border');
    $('.links li a:eq(1)').removeClass('border');
   
})
touch.on($('.links li a:eq(1)'),'tap',function(){
    $(this).addClass('border');
    $('.links li a:eq(0)').removeClass('border');
})
