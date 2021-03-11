$(document).ready(function(){
//   $(window).scroll(function (){
//     var height = $(window).scrollTop();
//     console.log(height);
    
// });
// $(document).scroll(function(){
//   $('header nav ul li').each(function(){
//     if($(this).offset().top - 200 < $(window).scrollTop()) {
//       let id = '#' + $(this).text().toLowerCase()
//       $('li').removeClass('active')
//       $('li' + id).addClass('active')
      
//   })
//   });

  // $('header nav ul li').each(function() {
  //   if($(this).offset().top - 200 < $(window).scrollTop()) {
  //     let id = '#' + $(this).text().toLowerCase()
  //     $('li').removeClass('active')
  //     $('li' + id).addClass('active')
  //   }
  // })

  $(window).scroll(function(){
    var menu = $('header nav ul li.m'),
        target = $('header nav ul li.m').parent(),
        scltop = $(window).scrollTop(),
        content = $('.scroll'),
        i= target.index(),
        targetTop = target.offset().top;
    
    $.each(content, function(idx,item){
      if(targetTop <= scltop){
        menu.removeClass('active');
        menu.eq(idx).addClass('active');
      }
    })
  })


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

  $('section.slideArea ul li span').click(function(){
    var liw = $('section.slideArea ul li').width()
    var ulleft=$('section.slideArea ul').offset().left

    if($(this).text()=='arrow_forward_ios'){
      $('section.slideArea ul').css('left', ulleft - liw);
    }else{
      $('section.slideArea ul').css('left', ulleft + liw);
    }
  })



})