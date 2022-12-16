$(document).ready(function () {
    $(document).scroll(function () {
        $(".scroll").each(function () {
            let scrollTop = $(document).scrollTop();
            let top = $(this).offset().top;
            let id = "#" + $(this).attr("id");

            if (top - 300 <= scrollTop) {
                $("header nav ul li").removeClass("active");
                $("header nav ul li" + id).addClass("active");
            }
        });
    });
    //  ID값 활용 header active 효과 fin

    $("header nav ul li").click(function () {
        let content = $("header nav ul li").index(this);
        // $scrtollTop = $(document).scrtollTop();
        let top = $(".scroll").eq(content).offset().top;
        // alert('hello')
        $("html,body").animate({ scrollTop: top }, 400);
    });
    // 스크롤 이동 이벤트 fin//

    let stars = 800;
    let $stars = $(".stars");
    let r = 800;
    for (let i = 0; i < stars; i++) {
        let $star = $("<div/>").addClass("star");
        $stars.append($star);
    }
    $(".star").each(function () {
        let cur = $(this);
        let s = 0.2 + Math.random() * 1;
        let curR = r + Math.random() * 300;
        cur.css({
            transformOrigin: "0 0 " + curR + "px",
            transform:
                " translate3d(0,0,-" +
                curR +
                "px) rotateY(" +
                Math.random() * 360 +
                "deg) rotateX(" +
                Math.random() * -50 +
                "deg) scale(" +
                s +
                "," +
                s +
                ")",
        });
    });
    // 별이그려지는 이벤트 fin //

    $("section.slideArea ul li span").click(function () {
        let liw = $("section.slideArea ul li").width();
        let ulleft = $("section.slideArea ul").offset().left;

        if ($(this).text() == "arrow_forward_ios") {
            $("section.slideArea ul").animate({ left: ulleft - liw }, 800);
        } else {
            $("section.slideArea ul").animate({ left: ulleft + liw }, 800);
        }
    });
    // 슬라이더 fin//

    $(".mui").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    // header mui span 모양변형 fin

    $(".mui +ul li").click(function () {
        if ($("input.mui").is(":checked")) {
            $("input[type=checkbox]").prop("checked", false);
            $(".mui").removeClass("active");
        }
    });
});
