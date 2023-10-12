/*gsap.to(".a",{x:100,duration:1},0)
gsap.to(".b",{x:200,duration:1},1.5)
gsap.to(".c",{x:300,duration:1},2.5)*/
//let tl = gsap.timeline({paused:true});
let tl = gsap.timeline();
gsap.defaults({duration:2});
tl.to(".a",{x:100})//
  .to(".b",{x:200},"+=1")//이전 트윈 종료 후 1초 뒤에 시작
.to(".c",{x:300},"-=1")//이전 트윈 종료 1초 전에 시작
//.to(".d",{x:400},"<")//이전 트윈 시작될때 동시에 실행
.to(".d",{x:400},"<1")//이전 트윈 시작된 후 1초 뒤에 실행
.to(".e",{x:500},1)//타임라인 1초에 실행