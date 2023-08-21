let food = ["햄버거", "돈가스", "칼국수", "김치찌개", "쌀국수"];
// let i = Math.floor(Math.random() * 5); // 0.99999999*5==0,4.9999
let i = Math.floor(Math.random() * food.length); // 0.99999999*5==0,4.9999
// i라는 변수를 정수로 반환해서 0,1,2,3,4만 필요함
console.log(i);
document.write(food[i]);

let bg = ["red", "blue", "green", "pink", "yellow"];
let j = Math.floor(Math.random() * 5); // 0,1,2,3,4
document.querySelector("body").style.backgroundColor = bg[j];

// let n = Math.floor(Math.random() * 6); // 0,1,2,3,4,5
// let n = Math.floor(Math.random() * 6); // 0,1,2,3,4,5
let n = Math.floor(Math.random() * 6); // 0,1,2,3,4,5
document.querySelector("body").style.backgroundImage =
  "url(images/photo" + (n + 1) + ".jpg)"; //1,2,3,4,5,6
//원래 이미지가 js파일 기준이라면 ../로 경로를 나가서 images폴더에서 찾아줘야하는데 스크립트는 index 구조(f12눌러서 이미지 들어가는 위치 확인해보기)에 스타일(이미지)이 인라인방식으로 적용되서 들어가기때문에 index기준으로 생각해서 ../를 넣지 않아도 사진이 나온다.
