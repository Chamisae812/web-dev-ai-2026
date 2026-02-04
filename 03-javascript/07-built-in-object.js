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
