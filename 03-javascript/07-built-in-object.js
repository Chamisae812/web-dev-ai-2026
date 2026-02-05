//math 객체
console.log("최소값 : ", Math.min(5, 7, -1, -8));
console.log("최대값 : ", Math.max(5, 7, -1, -8));
console.log("절대값 : ", Math.abs(-7.57));
console.log("반올림 : ", Math.round(2.897));
console.log("버림 : ", Math.floor(2.897));
console.log("올림 : ", Math.ceil(2.897));
console.log("0~1 랜덤 : ", Math.random());

//1~10까지의 랜덤 숫자
//0 <= Math.random() < 1
//*10
//0 <= Math.random()*10 < 10
// +1
// 1 <= Math.random()*10 + 1 < 11
console.log(Math.floor(Math.random() * 10 + 1));

//5~15 까지의 랜덤 숫자
console.log(Math.floor(Math.random() * 11 + 5));

//Date
const now = new Date();
//현재 날짜 및 시간
console.log(now);
console.log(
  `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`,
);

const date = new Date("2026-08-20");
console.log(date.toLocaleDateString("ko-KR", { weekday: "long" }));

const date1 = new Date("2026-08-20T18:00:00");
console.log(date1.toLocaleDateString("en-CA"));

//String
const str = "Hello, JavaScript!";
console.log("길이 : ", str.length);
console.log("포함여부 : ", str.includes("Java"));
console.log("위치 : ", str.indexOf("Java"));
console.log("일부 : ", str.slice(7, 17));
console.log("대문자 : ", str.toUpperCase());

//Timer
//1000 = 1초
//일정 시간 이후 실행
setTimeout(() => {
  console.log("3초 후 실행!");
}, 3000);

//일정 시간 마다 반복 실행
/*let sec = 0;
setInterval(() => {
  console.log(`${++sec}초!`);
}, 1000);*/

//JSON
const obj = {
  name: "안지훈",
  age: 24,
};
const jsonstr = JSON.stringify(obj);
console.log(obj); //object
console.log(jsonstr); //string
//문자열 -> 객체
const jsonParse = JSON.parse(jsonstr);
console.log(jsonParse);

//BOM

//location
console.log(location.href); //전체 주소
console.log(location.host); // 호스트명(도메인)
console.log(location.pathname); //경로

//페이지 이동 예) location.href = "주소";
