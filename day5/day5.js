/**
 * 객체 / Object
 * key : value
 */
const test = {
  name: "코난",
  score: 32,
  result: function () {
    return `${this.name}님은 불합격하셨습니다.`;
  },
};
console.log(test.result());

const nameKey = "name";
const nameValue = "석지훈";

const groupKey = "group";
const groupValue = "BTS";

const idol = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}님이 춤을춥니다.`;
  },
};

console.log(idol.dance());

idol["group"] = "EXO";
console.log(idol);
idol["age"] = 27;
console.log(idol);

console.log("-------------------------------");
/**
 * 객체의 특징
 * 1) CONST로 선언된 객체는 해당 변수가 가리키는 객체의 참조를 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 *
 *  - 즉 객체 자체를 변경 할 순 없지만 객체 내부의 값은 변경이 가능하다.
 */

console.log(Object.keys(idol));
console.log(Object.values(idol));

const name = "dune";
const dune = {
  name,
};
console.log(dune.name);
console.log("-------------------------------");

/**
 * copy by value / copy by reference
 * 값에 의한 전달 / 참조에 의한전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 *
 */

let orig = "안녕하세요";
let clone = orig;
console.log(orig);
console.log(clone);
orig += " dune입니다.";

console.log(orig);
console.log(clone);
console.log("-------------------------------");
let originalObj = {
  name: "dune",
  age: 28,
};

let clonObj = originalObj;

console.log(originalObj);
console.log(clonObj);

originalObj.sex = "male";
console.log(originalObj);
console.log(clonObj);
console.log("-------------------------------");


