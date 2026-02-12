console.log(`^ 테스트 :`, /^H/.test("Hello World")); //true
console.log(`^ 테스트 :`, /^H/.test("hello World")); //false
console.log(`$ 테스트 :`, /d$/.test("Hello World")); //true
console.log(`$ 테스트 :`, /d$/.test("Hello WorlD")); //false
console.log(`. 테스트 :`, /H.llo/.test("H$llo")); //true
console.log(`* 테스트 :`, /abc*d/.test("abd")); //true
console.log(`+ 테스트 :`, /abc+d/.test("abcd")); //true
console.log(`+ 테스트 :`, /abc+d/.test("abd")); //false
console.log(`? 테스트 :`, /abc?d/.test("abd")); //true
console.log(`? 테스트 :`, /abc?d/.test("abccd")); //false
console.log(`{2,4} 테스트 :`, /^a{2,4}$/.test("aaaa")); //true(2에서 4만 쓰고 싶으면 ^, $로 가둬야함)
console.log(`{2,4} 테스트 :`, /a{2,4}/.test("a")); //false
console.log(`[] 테스트 :`, /^[a-zA-Z0-9]{2,8}$/.test("abAS012")); //true
//가-힣 : 한글, !-~ : 특수문자 + 알파벳 소문자 + 대문자 + 숫자
console.log(`(|) 테스트 :`, /(dog|cat)/.test("dog")); //true
console.log(`(|) 테스트 :`, /(dog|cat)/.test("sdsdsds")); //false
console.log(`( \d ) 테스트 :`, /(^\d+$)/.test("12345")); //true
console.log(`( \D ) 테스트 :`, /(^\D+$)/.test("hello")); //true
console.log(`( \w ) 테스트 :`, /(^\w+$)/.test("abcde_12345")); //true
console.log(`( \W ) 테스트 :`, /(^\W+$)/.test("!@#")); //true
console.log(`( \W ) 테스트 :`, /(^\W+$)/.test("hello")); //false
console.log(`( \s ) 테스트 :`, /(\s+)/.test("a b c d")); //true
console.log(`( \S ) 테스트 :`, /(^\S+$)/.test("abcd")); //true

//2. match / replace / split
const test = "apple banana kiwi orange";
console.log("match", test.match(/kiwi/)[0]);
console.log("replace", test.replace(/a/g, "c")); // g를 붙이면 모두 찾아서 바꿈
console.log("split", "010-1234-5678".split(/-/));

//3. 주민등록번호 정규표현식
const input = document.querySelector("#input");
const rslt = document.querySelector("#result");
input.addEventListener("input", (e) => {
  //000000-0000000
  let regExp =
    /^(?:\d{2}(?:0[1-9]|1[0-2])(6?:0[1-9]|[12]\d|3[01]))-[1-4]\d{6}$/;
  if (regExp.test(e.target.value)) {
    rslt.textContent = "OK!";
    rslt.style.color = "green";
  } else {
    rslt.textContent = "No!";
    rslt.style.color = "red";
  }
});
