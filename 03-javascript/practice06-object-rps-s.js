const rsp = ["가위", "바위", "보"];

const pl = {};

const cp = {
  choice: 0,
  setChoice() {
    this.choice = Math.floor(Math.random() * 3);
  },
};

const game = {
  wn: 0,
  ls: 0,
  dw: 0,
  cp: 0,
  play() {
    while (true) {
      cp.setChoice();
      this.cp = this.cp.choice;

      let pl = prompt("안내면 진다 가위, 바위, 보!");

      if (pl === null) {
        alert(`게임 종료! ${this.wn}승 / ${this.ls}패 / ${this.dw}무`);
        break;
      }

      if (!(pl === "가위" || pl === "바위" || pl === "보")) {
        alert("가위, 바위, 보 만 입력");
        continue;
      }

      pl = rsp.indexOf(pl);
      console.log(pl);

      //결과
      if (this.cp === pl) {
        alert("무");
        this.dw++;
      } else if (
        (pl === 0 && this.cp === 2) ||
        (pl === 1 && this.cp === 0) ||
        (pl === 2 && this.cp === 1)
      ) {
        alert(`승! 너가 낸 건 ${rsp[pl]}, 검터가 낸 건 ${rsp[this.cp]}`);
        this.wn++;
      }
      //패
      else {
        alert(`패! 너가 낸 건 ${rsp[pl]}, 검터가 낸 건 ${rsp[this.cp]}`);
        this.ls++;
      }
    }
  },
};

game.play();
