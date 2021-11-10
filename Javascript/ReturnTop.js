$(function(){
    // 页面滚动监听
    $(window).scroll(function(){
        var sc = $(window).scrollTop(); // 距离顶部的距离
        //距离顶部的距离超过900px，[回到顶部]按钮出现，否则消失
        if (sc > 1000) {
            $(".Rocket_Box").show();
        } else {
            $(".Rocket_Box").hide();
        }
    });
    // 点击回到顶部按钮
    $(".Rocket_Box").click(function(){
        //此处利用animate动画添加动态效果
        $('html').animate({scrollTop:0},1200);
    });
});