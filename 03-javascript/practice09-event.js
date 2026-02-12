const ibox = document.querySelectorAll(".ibox");
for (let i = 0; i < ibox.length; i++) {
  ibox[i].style.backgroundImage = `url('./asset/spy${i + 1}.jpg')`;
}

let count = 0;

const click = document.querySelector("#click");
const rslt = document.querySelector("#Result");
click.addEventListener("click", () => {
  const ibox = document.querySelectorAll(".ibox");
  const result = [];

  for (let i = 0; i < ibox.length; i++) {
    const r = Math.floor(Math.random() * ibox.length) + 1;
    result.push(r);

    ibox[i].setAttribute(
      "style",
      "background-image: url('./asset/spy" + r + ".jpg')",
    );
  }

  // 3개가 모두 같은 그림이면 문구 출력
  if (result[0] === result[1] && result[1] === result[2]) {
    rslt.textContent = "축하합니다! 다시 시작하려면 재시작 버튼을 눌러주세요.";
    click.disabled = "true";
  }

  click.textContent = `Click ${++count}`;
});

const rstart = document.querySelector("#restart");
rstart.addEventListener("click", () => {
  const ibox = document.querySelectorAll(".ibox");
  for (let i = 0; i < ibox.length; i++) {
    ibox[i].style.backgroundImage = `url('./asset/spy${i + 1}.jpg')`;
  }
  count = 0;
  click.textContent = "click";
  click.removeAttribute("disabled");
  rslt.textContent = "";
});
// click 했을 시 이벤트 1개 추가
//이미지 3개 바뀜
//클릭버튼 누르면 숫자 증가
//문구 추가"축하합니다! 가시 시작하려면 재시작 버튼을 눌러주세요
//setAttribute() ->랜덤

//리스타트버튼 클릭 이벤트 추가
//새로고침하면 아차피 리셋 location.reload()
//또는 원상복귀
//클릭 숫자 초기화밑 숨김처리
//문구 삭제
