//문서 객체 가져오기
console.log(document.body);
//태그로 가져오기
console.log(document.getElementsByTagName("h1"));
//클래스로 가져오기
console.log(document.getElementsByClassName("testclass"));
//네임으로 가져오기
console.log(document.getElementsByName("testname"));
//아이디로 가져오기
console.log(document.getElementById("testid"));

//querySelector(선택자) : 1개 선택 / querySelectorAll(선택자) : 여러개 선택
//이거만 알아도됨
console.log(document.querySelector("#testid1"));
console.log(document.querySelectorAll("div"));

//문서 객체 조작하기
const editDivs = document.querySelectorAll("div");
editDivs[0].textContent = "<span>안녕하세요</span>";
editDivs[1].innerHTML = "<span>안녕하세요</span>";

//속성 조작
const editDiv = document.querySelector("#testid");
editDiv.setAttribute("data-test", "테스트");
console.log(editDiv.getAttribute("data-test"));
editDiv.removeAttribute("data-test");

//스타일 조작
editDiv.style.color = "orange";
editDiv.style.backgroundColor = "yellow";

//classlist 조작
const div2 = document.querySelector("#testid1");
div2.classList.add("active");
console.log(div2.classList.contains("active"));
div2.classList.remove("active");
console.log(div2.classList.contains("active"));
div2.classList.toggle("active");

//문제
//1번.
const res1 = document.querySelector("#result1");
function printText() {
  res1.innerHTML = "<span>안녕하세요</span>";
}

//2번.
const res2 = document.querySelector("#result2");
const customer = document.querySelector("#customer");
const printInputValue = () => {
  res2.textContent = customer.value;
};

//3번.
const cbox = document.querySelector("#colorBox");
function changeColor() {
  cbox.style.backgroundColor = "yellow";
}

//4번.
const text = document.querySelector("#text");
const res4 = document.querySelector("#result4");
function stringLength() {
  res4.textContent = text.value.length;
  text.value = "";
}

//3. 문서 객체 추가/삭제
const testid3 = document.querySelector("#testid3");
//testid3.innerHTML = "<p>텍스트 추가</p>";
const p = document.createElement("p");
p.textContent = "텍스트추가";
testid3.appendChild(p);

const pTarget = document.querySelector("#testid3 p");
pTarget.remove();

//5번.
const la = document.querySelector("#la");
const laArr = la.textContent.split(",");
const res5 = document.querySelector("#result5");
const stringSplit = () => {
  const ul = document.createElement("ul");
  for (value of laArr) {
    const li = document.createElement("li");
    li.textContent = value.trim();
    ul.appendChild(li);
  }
  res5.appendChild(ul);
};

//6번.
const list = document.querySelector("#list");
function addItem() {
  //const li = document. createElement("li");
  //li.textContent = "아이템 추가";
  //list.appendChild(li);
  list.innerHTML += "<li>아이템추가</li>";
}
function removeItem() {
  const item = document.querySelector("#list li");
  item.remove();
}

//7번.
const res9 = document.querySelector("#result9");
function toggleClass() {
  /*if (res9.classList.contains("toggle")) {
    res9.classList.remove("toggle");
  } else {
    res9.classList.add("toggle");
  } 밑에 하나로 축약 가능*/
  res9.classList.toggle("toggle");
}

//8번.
const item = document.querySelector("#item");
const price = document.querySelector("#price");
const cart = document.querySelector("#cart");
const total = document.querySelector("#total");
let sum = 0;

function addToCart() {
  cart.innerHTML += `<li>${item.value} - ${price.value}</li>`;
  sum += Number(price.value);
  item.value = "";
  price.value = "";
  total.textContent = sum;
}
