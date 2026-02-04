let result;
let count = 0;

//1~100
function getTarget() {
  return Math.floor(Math.random() * 100 + 1);
}

//input
function setInput() {
  input = prompt("1~100 중에 숫자를 입력해주세요.");
  num = Number(input);
}

//판단
function judge(answer) {
  if (input === null) return null;

  if (input.trim() === "" || Number.isNaN(num) || num < 1 || num > 100) {
    return "error";
  }

  count++;
  //count는 수업후 추가 윗 부분은 잘못 입력한거기 때문에 그 다음 부터 카운트
  if (num === answer) {
    return "success";
  } else if (num < answer) {
    return "up";
  } else {
    return "down";
  }
}

//showMessage
function showMessage() {
  if (result === "success") {
    alert(`오.. 정답! ${count}번만에 맞췄어 좀 치는데?`);
  } else if (result === "error") {
    alert("님 바보임? 제대로 입력하셈");
  } else if (result === "up") {
    alert("해당 숫자보다 큼");
  } else if (result === "down") {
    alert("해당 숫자보다 작음");
  }
}

//play
function play() {
  const answer = getTarget();

  while (true) {
    setInput();
    result = judge(answer);
    showMessage();

    if (result === null || result === "success") break;
    if (result === "error") continue;
  }
}

play();
