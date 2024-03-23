const buttonText = document.querySelector(".button-text");
const buttonTextCharactersContainer = document.querySelector(
  ".button-text-characters-container"
);

const buttonTextCharacters = buttonText.textContent.split("");

const characterCountWithoutWhitespaces = buttonTextCharacters.filter(
  (character) => (character) => !/\s/.test(character)
).length;

const buttonTextCharactersFragment = document.createDocumentFragment();

let characterIndex = 1;

buttonTextCharacters.forEach((character) => {
  const span = document.createElement("span");
  span.textContent = character;

  if (!/\s/.test(character)) {
    span.classList.add("button-text-character");
    const delay = `calc(2s / ${characterCountWithoutWhitespaces} * ${characterIndex} + 1s)`;
    span.style.setProperty("--delay", delay);

    characterIndex++;
  }

  buttonTextCharactersFragment.appendChild(span);
});

buttonTextCharactersContainer.appendChild(buttonTextCharactersFragment);
//# sourceURL=pen.js

// 예제 코드
/* 변수선언
var : 호이스팅으로 현재 사용하지 않는다. 단 개념을 알고있어야 추후 진행가능하므로 책을 읽어보자
let : 변수선언 추후 변경가능
const : 상수선언 추후 변경불가능
*/

// let dune = "티모시";
// console.log(dune);
// dune = "모래두더지";
// console.log(dune);

// const date = "3월9일";
// console.log(date);

function clickVariable() {
  let dune = "티모시";
  console.log(dune);
  dune = "모래두더지";
  console.log(dune);

  const date = "3월9일";
  console.log(date);
  console.log("---------------------");
}

// date = "3월8일";
// 오류가 난다는걸 확인할수 있다.
// console.log(date);

/* 선언과 할당
  선언은 별수를 선언하는것 즉 초기화작업
  할당은 선언된 변수에 값을 할당하는것
  */

//선언만 할경우 출력되는 값은?
function isUndefined() {
  let twice;
  console.log(twice);
  //const의 경우 상수이므로 추후 변경이 불가능해 선언과 동시에 값을 할당해야한다.
  console.log("---------------------");
}

/**
 * Naming Conventions
 *
 * 1) 일반적으로 영어를 사용하며 문자와 숫자가 가능
 * 2) 특수기호는 언더스코어(_)와 달러($)를 사용하능
 * 3) 숫자로 시작은 불가능
 *
 */

/**
 *  Naming Conventions2
 *
 * 1) camelCase - 단어를 대문자로 구분 ex)duneDay
 * 2) snake_case - 단어를 언더스코어로 구분 ex)dune_day
 * 3) pascalCase - 단어의 첫글자를 대분자로 구분(시작하는 단어 포함) ex)DuneDay
 *
 */

/** Data Types
 *
 * 여섯개의 primitive Type 과
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언)
 * 4) undefined
 * 5) null
 * 6) Symbol
 *
 * 한개의 Object Type 이있다.
 * 1) Object(객체)
 *  - Function
 *  - Array
 *  - Object etc...
 *
 *
 */
function isType() {
  const age = 26;
  const temperature = -10;
  const pi = 3.14;
  console.log(typeof age);
  console.log(typeof temperature);
  console.log(typeof pi);
  const dunes = "듄";
  console.log(typeof dunes);

  console.log("---------------------");
}

/**
 * Template Literal
 *  1) newLine(줄바꿈) ->\n
 *  2) tab ->\t
 *  3) 백틱 ->`모든특수기호 사용가능`
 */
function isLiteral() {
  const dune1 = "듄입니다.\n듄일까요";
  console.log(dune1);
  console.log("---------------------");
}

/**
 * Boolean 타입
 *  1)참과 거짓 true false
 */
function isBool() {
  const isTrue = true;
  const isFalse = false;
  console.log(isTrue, isFalse);
  console.log("---------------------");
}

/**
 * undefined
 * 1) 사용자가 선언만 한경우
 */
function isundefined() {
  let isUn;
  console.log(isUn);
  console.log("---------------------");
}

/**
 * null 타입
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할경우 사용
 */
function isNull() {
  let callDune = null;
  console.log(callDune);
  console.log("---------------------");
}

/**
 * Symbol 타입
 *
 * 1)유일무이한 값을 생성할때 사용
 *  - 다른 프리미티브 값들과 다르게 Symbol함수를 호출해서 사용
 */
function isSymbol() {
  const test1 = "1";
  const test2 = "1";

  console.log(test1 === test2);

  const symbol1 = Symbol("1");
  const symbol2 = Symbol("1");

  console.log(symbol1 === symbol2);
  console.log("---------------------");
}

/**
 * Object 타입
 *
 * Map
 * 키:밸루의 쌍으로 이루어져 있다.
 */

function isObject() {
  const dictionary = {
    red: "빨간색",
    orange: "주황색",
  };
  console.log(dictionary);
  console.log(dictionary["red"]);
  console.log(dictionary["orange"]);
  console.log(typeof dictionary);
  console.log("---------------------");
}

/**
 * Array Type
 * 1) 값을 리스트로 나열가능
 */
const isArr = () => {
  const isArray = ["어레이1", "어레이2", "어레이3"];
  console.log(isArray);

  //인덱스 즉 순서는 0 부터 시작한다.
  console.log(isArray[0]);
  console.log(isArray[1]);
  console.log(isArray[2]);
  console.log(typeof isArray);

  //마지막 값을 가져올경우
  console.log(isArray[isArray.length - 1]);
  console.log("---------------------");
};

// 초기 버튼 상태 설정
const buttonStates = {
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
  btn5: false,
  btn6: false,
  btn7: false,
  btn8: false,
};

// 각 버튼에 따른 내용
const buttonContents = {
  btn1: {
    false: `
        변수선언 var : 호이스팅으로 현재 사용하지 않는다. <br />
        단 개념을 알고 있어야 추후 진행 가능하므로 책을 읽어보자 <br />
        let : 변수선언 추후 변경 가능 const : 상수선언 추후 변경 불가능
      `,
    true: `
        let : 변수선언 추후 변경가능 const : 상수선언 추후 변경불가능 <br />
        let dune = "티모시"; <br />
        console.log(dune); <br />
        dune = "모래두더지"; <br />
        console.log(dune); <br />
        const date = "3월9일"; <br />
        console.log(date);
      `,
  },
  btn2: {
    false: "버튼 2의 내용을 여기에 입력하세요",
    true: "버튼 2의 내용을 여기에 입력하세요",
  },
  // 나머지 버튼에 대한 내용도 동일한 방식으로 추가할 수 있습니다.
};

// 버튼 상태에 따른 내용 변경 함수
const btnCtr = (buttonNumber) => {
  const buttonStateKey = "btn" + buttonNumber;
  const buttonState = buttonStates[buttonStateKey];
  const textBox = document.querySelector(`.textBox${buttonNumber}`);
  const content = buttonContents[buttonStateKey][buttonState];

  textBox.innerHTML = content;
  textBox.style.backgroundColor = buttonState ? "transparent" : "white";

  // 버튼 상태 업데이트
  buttonStates[buttonStateKey] = !buttonState;
};

// 페이지 로드 시 초기화
window.onload = function () {
  for (let i = 1; i <= 8; i++) {
    btnCtr(i);
  }
};
