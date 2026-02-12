//window.addEventListener("이벤트명", (event) => {});
// HTML 구조가 완전히 로드된 뒤 실행
window.addEventListener("DOMContentLoaded", () => {});
// h1 가져오기
const h1 = document.querySelector("h1");
console.log(h1);

//onclick 없이 클릭 이벤트
const click = document.querySelector("#click");
click.addEventListener("click", () => {
  //클릭 이벤트가 일어날 시 실행하고자 하는 코드 입력
  alert("클릭이벤트 발생!");
  click.style.backgroundColor = "skyblue";
});

const double = document.querySelector("#double");
double.addEventListener("dblclick", () => {
  alert("더블 클릭 발생!");
});

const right = document.querySelector("#right");
right.addEventListener("contextmenu", (event) => {
  event.preventDefault(); //기존값(이벤트) 제거 (브라우저에서 뜨는 값을 이부분에서만 삭제)
  alert("우클릭 발생!");
});

const hover = document.querySelector("#hover");
hover.addEventListener("mouseenter", () => {
  console.log("mouseenter");
  hover.style.backgroundColor = "seagreen";
  hover.textContent = "Mouse Enter!";
});
hover.addEventListener("mouseleave", () => {
  console.log("mouseleave");
  hover.style.backgroundColor = "navy";
  hover.textContent = "Mouse Leave!";
});

//제출 이벤트
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const inputResult = document.querySelector("#inputResult");
form.addEventListener("submit", (e) => {
  //input 입력이 비어있을 시만 방지, 입력했다면 제출
  if (input.value.trim() === "") {
    e.preventDefault();
  } else alert("제출완료!");
});
input.addEventListener("input", () => {
  inputResult.textContent = input.value;
});

//select에 있는 option을 선택할 때마다 일어나는 이벤트 : change
//해당하는 이벤트가 seletResult에 일어나도록
//e.target.value
const select = document.querySelector("select");
const selectResult = document.querySelector("#selectResult");
select.addEventListener("change", (e) => {
  selectResult.textContent = e.target.value;
});

//키보드 이벤트
//keydown -keypress-keyup
const key = document.querySelector("#key");
const keyResult = document.querySelector("#keyResult");
key.addEventListener("keyup", (e) => {
  keyResult.textContent = e.key;
});
const mBox = document.querySelector(".moveBox");
let y = 0;
let x = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    y -= 25;
  } else if (e.key === "ArrowDown") {
    y += 25;
  } else if (e.key === "ArrowLeft") {
    x -= 25;
  } else if (e.key === "ArrowRight") {
    x += 25;
  }
  mBox.style.top = `${y}px`;
  mBox.style.left = `${x}px`;
});

//스크롤 이벤트
const wheel = document.querySelector("#wheel");
document.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) wheel.textContent = "휠을 위로올림!";
  else wheel.textContent = "휠을 아래로내림!";
});
const scroll = document.querySelector("#scroll");
document.addEventListener("scroll", () => {
  console.log(document.documentElement.scrollHeight); //전체 높이
  console.log(window.innerHeight); //화면에 보이는 높이
  console.log(window.scrollY); //스크롤 위치
  //scrollY + innerHeight = scrollHeight
  const scrollHeight = document.documentElement.scrollHeight;
  const innerHeight = window.innerHeight;
  const scrollY = window.scrollY;
  //console.log(scrollHeight - innerHeight);
  const totalHeight = scrollHeight - innerHeight;
  //console.log((scrollY / totalHeight) * 100);
  const width = (scrollY / totalHeight) * 100;
  scroll.style.width = `${width}%`;
});

//이벤트 위임
//이미지를 클릭할 때마다 해당 이미지 삭제
/*const img = document.querySelectorAll(".container img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    img[i].style.display = "none";
    //e.target.style.display = "none";
    //e.currentTarget.style.display = "none";
  });
}*/
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  console.log(e.target); //내가 클릭한 것
  console.log(e.currentTarget); // 이벤트가 걸린 본인
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
});

/*const container = document.querySelector(".container");
const removeHandler = (e) => {
  console.log(e.target); //내가 클릭한 것
  console.log(e.currentTarget); // 이벤트가 걸린 본인
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
};
*/
