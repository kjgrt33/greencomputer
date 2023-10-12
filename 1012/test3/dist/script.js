/*gsap.to(".green,.purple", {
  x:100,
  y: -100, 
  opacity:1,
  scale:2,
  rotation:360,
  duration: 1,
  yoyo:true,
  repeat:-1,
  repeatDelay: 1,
});*/
// gsap.from(".box",{
//   opacity:0,
//   duration:2,
//   //y:"random(-200,200)",
//   //y:()=>Math.random()*400-200,
//   y:function(){
//     return Math.random()*400-200;
//   },
//   stagger:0.2,
// })
/*gsap.to(".box",{
  y:-100,
  //ease:"none",==linear
  ease:"bounce.out",
  stagger:{
   // each:0.2,
    amount:0.2,
    //from:'first'
    //from:'end'
    //from:'center'
    from:'edges'
  },
})*/
/*gsap.fromTo(".box",
            {scaleY:0,duration:1,transformOrigin:'0% 0%'},
            {scaleY:2,duration:1,transformOrigin:'left bottom'})*/
let tl =gsap.to(".box",{y:-100,duration:1,paused:true})
$(".box").hover(function(){
  tl.play();
},function(){
 // tl.reverse();
   //tl.pause();
  tl.restart();
})