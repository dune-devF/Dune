/**
 * function ->함수
 */

/**
 * parameter를 사용하여 값을 구함
 * 	- 함수와 메서드 입력 변수(Variable) 명
 * a,b가 해당됨
 */

const calc = (a, b) => console.log(a * b);

function calc2(a, b) {
  return console.log(a * b);
}

/**
 * Argument 사용법
 * 함수와 메서드의 입력 값(Value)
 * 2,4는 argument.
 */

calc(4, 4);
calc2(4, 4);

const multi = (x) => (c) => (y) => console.log(x, c, y);
multi(2)(3)(4);

function multi2(x) {
  return function (y) {
    return function (k) {
      return console.log(x, y, k);
    };
  };
}
multi2(3)(3)(4);

const multi3 = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};
console.log(multi3(1, 2, 3));

//parameter를 무한히 받는법 ...argument
const inFi = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(inFi(3, 4, 5, 6, 7, 8, 9));

// 함수의 식별자없이 즉시 실행하는방법 ()안에 함수를 넣고 ()값에 파라미터값을 입력
(function (x, y) {
  console.log(x * y);
})(3, 4);

//대상의 type을 알아볼때
console.log(typeof multi);
//a의 값이 b인지 알아볼때
console.log(multi instanceof Object);


