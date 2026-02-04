function updownGame() {
  const answer = Math.floor(Math.random() * 100 + 1);

  while (true) {
    const input = prompt("1~100 중에 숫자를 입력해주세요.");

    if (input === null) {
      alert("게임을 종료합니다.");
      break;
    }

    const num = Number(input);

    if (input.trim() === "" || Number.isNaN(num)) {
      alert("님 바보임? 제대로 입력하셈");
    }

    if (num === answer) {
      alert("오.. 정답! 좀 치는데?");
      break;
    } else if (num < answer) {
      alert("해당 숫자보다 큼");
    } else {
      alert("해당 숫자보다 작음");
    }
  }
}

updownGame();
