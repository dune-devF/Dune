//js에서 기본적으로 제공해주는 함수

let twice = ["a", "b", "c"];
console.log(twice);
//push함수 - 배열의 마지막에 값을 추가해준다.
twice.push("지훈");
console.log(twice);
console.log("-------------------------------------------------");
//push도 return값이 있을까?
//push의 return값은 값을 추가한후 배열의 길이를 반환한다.
console.log(twice.push("사나"));
console.log(twice);
console.log("-------------------------------------------------");
/**
 * pop합수
 * - return 값은 배열의 마지막값이며
 * - 배열의 마지막값을 제거한다.
 *  */
console.log(twice.pop());
console.log(twice);

console.log("-------------------------------------------------");

/**
 * shift()
 * - return값은 가장 처음값
 * -배열의 첫번쨰값을 제거
 * unShift()
 * - return값은  함수가 작동한 뒤의 배열의 길이
 * - 배열의 가장 앞에 값을 추가
 */
console.log(twice.shift());
console.log(twice);
console.log(twice.unshift("미나"));
console.log(twice);
console.log("-------------------------------------------------");
/**
 * splice()
 * -return값은 argument의 값
 * -a부터 b까지 배열index를 삭제
 */
console.log(twice.splice(1, 2));
console.log(twice);
console.log("-------------------------------------------------");

/**
 * 기존값을 컨트롤하는것이 아닌 새배열을 반환하는 함수
 */

// concat 함수 - 값을 마지막에 추가하고 새배열을 반환
let dune = [1, 3, 4, 2, 5, 6];
console.log(dune.concat(8));

//slice(a,b) - a부터 b전까지 index 값을  새배열로 반환
console.log(dune.slice(0, 2));

console.log("-------------------------------------------------");

// spread operator
let dune3 = [dune];
console.log(dune3);
let dune2 = [...dune];
console.log(dune);

console.log("-------------------------------------------------");

//join() - 배열의 값을 string으로 반환 argument 값을 넣어주면 그값을 기준으로 string을 반환
console.log(dune.join());
console.log(dune.join("/"));
console.log("-------------------------------------------------");
/**
 * 정렬함수
 * sort() - 오름차순으로 정렬 / return값 없음
 * reverse() - 내림차순으로 정렬 /return값으로 정렬된값이 반환됨
 */
dune.sort();
console.log(dune);
console.log(dune.reverse());
console.log("-------------------------------------------------");

let numbers = [1, 4, 2, 5, 3, 5];
console.log(numbers);
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log("-------------------------------------------------");
console.log(numbers);
numbers.sort((a, b) => {
  return a < b ? 1 : -1;
});
console.log(numbers);

console.log("-------------------------------------------------");

/**
 * map()
 *  - array의 모든 값을 순회하면서 형태를 변형
 *  - 새배열을 반환
 */

console.log(numbers.map((x) => x));
console.log(numbers.map((x) => `숫자 : ${x}`));

console.log(
  numbers.map((x) => {
    if (x === 1) {
      return `히든숫자는:${x}`;
    } else {
      return x;
    }
  })
);
console.log(numbers);

console.log("-------------------------------------------------");

//filter((x)=>x) - return값은 조건을 만족한 모든 값
console.log(numbers.filter((a) => a % 2 === 0));

//find() - 파라미터를 받아 조건에 만족하는 가장 처음값을 반환
console.log(numbers.find((x) => x % 2 === 0));

//findIndex() -find와 같은 값을 반환하나 그값의 index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0));
console.log("-------------------------------------------------");

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
