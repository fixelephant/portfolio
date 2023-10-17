// 올라감 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



// scroll animation
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	        });
}); 




// splitting
$(function(){Splitting();}); 


// halfMenu
$(function() {
  $('.menuOpen a').on('click' , function() {
    $('.halfMenu').removeClass('on');
    $('.halfMenu').addClass('on');
  });

  $('.halfMenu .menuClose').on('click' , function() {
    $('.halfMenu').removeClass('on');
  });

});

// about
gsap.registerPlugin(ScrollTrigger);
$(function(){
    gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: '15% top',
            end: '60% 90%',
            scrub: 1,
            // markers: 1
        }
    })
    .fromTo('.about .img' , {opacity:0,}, {opacity:1, duration:20},0)
    .fromTo('.about .title', {'y':'-100%', opacity:0}, {'y':'0', opacity:1, duration:20},0)
    .fromTo('.about .profile' , {'y':'100%', opacity:0}, {'y':'0%', opacity:1,duration:20},0)
    .fromTo('.about .edu' , {'y':'100%', opacity:0}, {'y':'0%', opacity:1, duration:20},0)
    .fromTo('.about .motto' , {'y':'100%', opacity:0}, {'y':'0%', opacity:1, duration:20},0)
});

// strength

$(function() {
  let list = gsap.utils.toArray('.strength ul li');
  gsap.timeline({
    scrollTrigger: {
      trigger: '.strength',
      scrub: 1,
      start: '-55% top',
      end: 'top 40%',
      // markers: true
    }
  })
  .to('.strength', {backgroundColor: '#131313'},0);

  let scrollTween = gsap.to(list, {
    xPercent: -120 * (list.length -1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.strength',
      pin: true,
      scrub: 1,
      start: 'center center',
      end: '350%',
      // markers: true
    }
  });
  gsap.utils.toArray('.good').forEach(function(good){
    gsap.timeline({
      scrollTrigger: {
        trigger: good,
        containerAnimation: scrollTween,
        start: 'center 70%',
        end: 'center 40%',
        scrub: true,
        // markers: true
      }
    })
    .to(good, {'opacity':'1'},0);

    gsap.timeline({
      scrollTrigger: {
        trigger: good,
        containerAnimation: scrollTween,
        start: 'center 30%',
        end: 'center 20%',
        scrub: true,
        // markers: true
      }
    })
    .to(good, {'opacity':'0'},0);
  })
});

// hobby 
$(function(){
  gsap.timeline({
    scrollTrigger: {
      trigger: '.hobbyTitle',
      scrub:1,
      start: 'top top',
      end: '20% 20%',
      markers: true
    }
  })
  .fromTo('.hobbyTitle .textBox', {'opacity':'0','y':'100%', 'duration':15}, {'y':'0','opacity':'1', 'duration':15},30)
})


// running
$(function(){
  let upBox = document.querySelectorAll('.upBox');
  gsap.timeline({
    scrollTrigger: {
      trigger: '.running',
      pin:true,
      scrub:1,
      start: 'top top',
      end: '+=400%',
      // markers:1
    }
  })
  .from(upBox, {'y':'700%', 'duration':'15', 'ease':'none', 'stagger':'10'})
  .to(upBox, {'y':'0'}, "+=15")
})


// food
$(function() {
  $('.scroller').simplyScroll({
    frameRate: 7
  })
});

// hiking

// footer
$(function() {
    $('footer .contact li').on('mouseover', function() {
      $('footer .svg').removeClass('on');
      $('footer .svg').addClass('on');
    });
  
    $('footer .contact li').on('mouseleave', function(){
      $('footer .svg').removeClass('on')
    });
  });