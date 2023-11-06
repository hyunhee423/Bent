// landing

const introTl=gsap.timeline({
  onComplete:function(){
    $('.landing-wrap').remove();
    introTl2.play();
  }
  })

introTl
.to('.landing .landing-overlay',{ height:0 , stagger:0.2,})  

.introTl2 = gsap.from('.sc-main',{opecity:0, paused:true})

// visual
gsap.set('.sc-visual .img-area>img',{scale:2, stagger:0.1})

descBg = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-visual',
    start: "0% 0%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})
descBg.to('.sc-visual .img-area>img',{ scale:1.5 ,stagger:0.1},'a')

// about
gsap.set('.sc-about .line-colum',{height:0})
gsap.set('.sc-about .line-row',{width:0})

lineWt = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-about',
    start: "0% 0%",
    end: "100% 100%",
    markers:true,
  },
  
})

lineWt.to('.sc-about .line-colum',{ height:800},'a')
lineWt.to('.sc-about .line-row',{ width:2000},'a')


// skill
gsap.set('.sc-skill .line-colum',{height:0})
gsap.set('.sc-skill .line-row',{width:0})

lineWt2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-skill',
    start: "0% 0%",
    end: "100% 100%",
    markers:true,
  },
  
})
lineWt2.to('.sc-skill .line-colum',{ height:800},'a')
lineWt2.to('.sc-skill .line-row',{ width:1775},'a')



// clinets
gsap.set('.sc-clients .line-colum',{height:0})
gsap.set('.sc-clients .line-row',{width:0})

lineWtt = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-clients',
    start: "0% 0%",
    end: "100% 100%",
    markers:true,
  },
  
})
lineWtt.to('.sc-clients .line-colum',{ height:800},'a')
lineWtt.to('.sc-clients .line-row',{ width:2000},'a')



// projects
gsap.set('.sc-project .item-link img',{scale:1.5, stagger:0.1})

descBg = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-project',
    start: "0% 0%",
    end: "100% 100%",
    scrub:1,
    markers:true,
  },
  
})
descBg.to('.sc-project .item-link img',{ scale:2 ,stagger:0.1},'a')