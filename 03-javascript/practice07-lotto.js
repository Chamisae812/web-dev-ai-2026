let lotto = [];

while (lotto.length < 7) {
  const random = parseInt(Math.floor(Math.random() * 45 + 1));
  if (!lotto.includes(random)) {
    lotto.push(random);
  }
}
const bonus = lotto[lotto.length - 1];
lotto = lotto.slice(0, 6);
console.log(`lotto : ${lotto}, bonus : ${bonus}`);

const counter = 0;

while (true) {
  const my = [];
  while (my.length < 6) {
    const random = parseInt(Math.floor(Math.random() * 45 + 1));
    if (!my.includes(random)) {
      my.push(random);
    }
  }

  counter++;
  console.log(`로또번호 : ${lotto} 보너스 번호 : ${bonus}`);
  console.log(`내 번호 : ${my}`);

  let count = 0;
  for (let num of lotto) {
    if (my.includes(num)) {
      count++;
    }
  }
  console.log(`일치 개수 : ${count}`);

  if (count === 6) {
    console.log(`1등 당첨 ${counter}번 만에 맞추셨네요`);
    break;
  } else if (count == 5 && my.includes(bonus)) {
    console.log(`2등 당첨 ${counter}번 만에 맞추셨네요`);
    break;
  } else if (count == 5) {
    console.log(`3등 당첨 ${counter}번 만에 맞추셨네요`);
    break;
  } else if (count == 4) {
    console.log(`4등 당첨 ${counter}번 만에 맞추셨네요`);
    break;
  } else if (count == 3) {
    console.log(`5등 당첨 ${counter}번 만에 맞추셨네요`);
    break;
  }
}
