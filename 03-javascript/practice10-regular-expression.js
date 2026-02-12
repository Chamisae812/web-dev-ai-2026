//아이디
const id = document.querySelector("#id");
const idrslt = document.querySelector("#idrslt");
id.addEventListener("input", (e) => {
  let idRE = /^[a-zA-Z0-9]{4,12}$/;
  if (idRE.test(e.target.value)) {
    idrslt.textContent = "사용 가능한 아이디입니다.";
    idrslt.style.color = "green";
  } else {
    idrslt.textContent = "사용 불가능한 아이디입니다.";
    idrslt.style.color = "red";
  }
});
//비밀번호
const pw = document.querySelector("#pw");
const pwrslt = document.querySelector("#pwrslt");
pw.addEventListener("input", (e) => {
  let pwRE = /^[!-~]{8,15}$/;
  if (pwRE.test(e.target.value)) {
    pwrslt.textContent = "사용 가능한 비밀번호입니다.";
    pwrslt.style.color = "green";
  } else {
    pwrslt.textContent = "사용 불가능한 비밀번호입니다.";
    pwrslt.style.color = "red";
  }
});
//비밀번호 확인
const rpw = document.querySelector("#rpw");
const rpwrslt = document.querySelector("#rpwrslt");
rpw.addEventListener("input", () => {
  if (pw.value === rpw.value) {
    rpwrslt.textContent = "동일한 비밀번호입니다.";
    rpwrslt.style.color = "green";
  } else {
    rpwrslt.textContent = "동일하지 않은 비밀번호입니다.";
    rpwrslt.style.color = "red";
  }
});
//이름
const nm = document.querySelector("#name");
const nmrslt = document.querySelector("#nmrslt");
nm.addEventListener("input", (e) => {
  let nmRE = /^[가-힣]{2,}$/;
  if (nmRE.test(e.target.value)) {
    nmrslt.textContent = "사용 가능한 이름입니다.";
    nmrslt.style.color = "green";
  } else {
    nmrslt.textContent = "사용 불가능한 이름입니다.";
    nmrslt.style.color = "red";
  }
});
//이메일
const emailId = document.querySelector("#email-id");
const emailDomain = document.querySelector("#email-domain");
const erslt = document.querySelector("#erslt");

const validateEmail = () => {
  const emailIdRE = /^[a-zA-Z0-9]+$/;
  const emailDomainRE = /^(?:[a-z]+\.)+[a-z]{2,}$/;

  const idValue = emailId.value.trim();
  const domainValue = emailDomain.value.trim();

  if (emailIdRE.test(idValue) && emailDomainRE.test(domainValue)) {
    erslt.textContent = "사용 가능한 이메일 형식입니다.";
    erslt.style.color = "green";
  } else {
    erslt.textContent = "사용 불가능한 이메일 형식입니다.";
    erslt.style.color = "red";
  }
};

emailId.addEventListener("input", validateEmail);
emailDomain.addEventListener("input", validateEmail);
//전화번호
const tel = document.querySelector("#tel");
const trslt = document.querySelector("#trslt");
tel.addEventListener("input", (e) => {
  let tRE = /^01[016789]-?\d{3,4}-?\d{4}$/;
  if (tRE.test(e.target.value)) {
    trslt.textContent = "사용 가능한 전화번호입니다.";
    trslt.style.color = "green";
  } else {
    trslt.textContent = "사용 불가능한 전화번호입니다.";
    trslt.style.color = "red";
  }
});
