const rsp = ["가위", "바위", "보"];

const cp = rsp[Math.floor(Math.random() * rsp.length)];
console.log(cp);

while (true) {
  const input = prompt("안내면 진다 가위, 바위, 보!");

  //승
  if (input === "가위" && cp === "보") {
    alert("승");
  } else if (input === "보" && cp === "바위") {
    alert("승");
  } else if (input === "바위" && cp === "가위") {
    alert("승");
  }

  //무
  if (input === cp) {
    alert("무");
  }

  //패
  if (input === "가위" && cp === "바위") {
    alert("패");
  } else if (input === "바위" && cp === "보") {
    alert("패");
  } else if (input === "보" && cp === "가위") {
    alert("패");
  }

  if (input === null) {
    alert("게임을 종료합니다.");
    break;
  }
}
