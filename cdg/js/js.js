$(document).ready(function(){
  
$(document).scroll(function(){
  $('.scroll').each(function(){
    var scrollTop = $(document).scrollTop();
    var top = $(this).offset().top;
    var id = '#'+$(this).attr('id');

    if(top-300 <= scrollTop){
      $('header nav ul li').removeClass('active')
      $('header nav ul li' + id).addClass('active')
    }
  })
  })
//  ID값 활용 header active 효과 fin
  

  $('header nav ul li').click(function(){
      var content = $('header nav ul li').index(this);
      // $scrtollTop = $(document).scrtollTop();
      var top = $('.scroll').eq(content).offset().top;
      // alert('hello')
      $('html,body').animate({scrollTop : top}, 400);
    })
// 스크롤 이동 이벤트 fin//

       

  var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })
// 별이그려지는 이벤트 fin //




  $('section.slideArea ul li span').click(function(){
    var liw = $('section.slideArea ul li').width()
    var ulleft=$('section.slideArea ul').offset().left

    if($(this).text()=='arrow_forward_ios'){
      $('section.slideArea ul').animate({left: ulleft - liw}, 800);
    }else{
      $('section.slideArea ul').animate({left: ulleft + liw}, 800);
    }
  })
// 슬라이더 fin//


})