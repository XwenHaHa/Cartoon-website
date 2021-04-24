// 导航栏下拉至一定高度后固定在顶部的特效
function headerrolling() {
    $(document).ready(function () {
        //首先获取导航栏距离中间盒子顶部的高度
        var top = $('.banner').offset().top;
        //开始监控滚动栏scroll
        $(document).scroll(function () {
            //获取当前滚动栏scroll的高度并赋值
            var scrTop = $(window).scrollTop();
            //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
            if (scrTop >= top) {
                $('.header').css({
                    'position': 'fixed',
                    'z-index': '999',
                    'top': '0',
                    'width': '100%'
                });
            } else { //否则清空悬浮
                $('.header').css({
                    'position': '',
                    'top': ''
                });
            }
        })
    })
}

// 顶部返回
function returntop() {
    $(function () {
        $(function () {
            //当点击跳转链接后，回到页面顶部位置
            $("#toTop").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 1500);
                return false;
            });
        });
    });
}

// 轮播图
function turnpicture() {
    var index2 = 0; /*初始化一个变量 指向下彪*/
    //点击点
    $(".tab-btn .btn").click(function () {
        index2 = $(this).index(); //获取点击该元素下彪
        $(this).addClass("active").siblings().removeClass("active");
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
    });
    //点击切换效果
    $(".lr-tab .right").click(function () {
        index2++;
        if (index2 > 4) {
            index2 = 0;
        }
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

    });
    $(".lr-tab .left").click(function () {
        index2--;
        if (index2 < 0) {
            index2 = 4;
        }
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

    });
    var time2 = setInterval(function () {
        index2++;
        if (index2 > 4) {
            index2 = 0;
        }
        $(".item").eq(index2).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");

    }, 4000); //定时器 重复
}

//右边工具栏吸顶效果
function sidenavrolling() {
    $(document).ready(function () {
        //首先获取导航栏距离中间盒子顶部的高度
        var top = $('.goods').offset().top;
        //开始监控滚动栏scroll
        $(document).scroll(function () {
            //获取当前滚动栏scroll的高度并赋值
            var scrTop = $(window).scrollTop();
            //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
            if (scrTop >= top) {
                $('.sidenav').css({
                    'position': 'fixed',
                    'z-index': '999',
                    'top': '50px',
                    'right': '0',
                    'transition': 'all 0.4s',
                });
            } else { //否则清空悬浮
                $('.sidenav').css({
                    'position': '',
                    'top': ''
                });
            }
        })
    })
}
