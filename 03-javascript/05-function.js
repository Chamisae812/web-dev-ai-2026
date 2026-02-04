//1. 매개변수, 리턴값 X
//function 함수명() {}
function sayHello() {
  console.log("안녕하세요!");
}
sayHello(); //함수 호출해야 콘솔에 표시됨

//2. 매개변수(parameter) O, 리턴값 X
function greet(name = "게스트") {
  console.log(`${name}님, 안녕하세요!`);
}
greet("안지훈");
greet();

//3. 매개변수 X, 리턴값 O
//return : 함수 호출 결과, 함수 종료
function getNumber() {
  return 1049;
}
console.log(getNumber());

//3. 매개변수 O, 리턴값 O
//parameter는 입력 return은 출력
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// 변수의 유효범위(scope)
const num1 = 100; //전역 변수
function sample1() {
  const num1 = 200; //지역변수
  console.log("sample1 내부 : " + num1);
}
sample1();
console.log("sample1 외부 : " + num1);

//선언적 vs 익명 vs 화살표함수
//선언적 함수(function declaration)
//호이스팅 : 선언 이전에 호출가능
console.log("선언적 함수 : ", multiply(3, 4));
function multiply(a, b) {
  return a * b;
}

// 익명 함수(function expression)
//함수 이름 X, 변수에 할당
const subtract = function (a, b) {
  return a - b;
};
console.log("익명 함수 : ", subtract(5, 8));

// 화살표 함수(arrow function)
const divide = (a, b) => {
  return a / b;
};
console.log("화살표 함수 : ", divide(8, 2));

// 콜백함수
// 다른 함수의 파라미터로 전달되는 함수
function callFunc(callback) {
  console.log("함수 호출 전");
  callback(); //콜백 함수 호출
  console.log("함수 호출 후");
}
function call() {
  console.log("안녕하세요~ 이걸 콜백함수로 호출");
}
callFunc(call);

// 1. 값을 하나씩 출력 -> forEach

// 2. 배열의 값을 각각 2배로 만들어서 출력
//[2, 4, 6, 8, 10]
