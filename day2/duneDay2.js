/**
 * 호이스팅(Hoisting)
 *  모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 *  var, let, const 모두 hoisting된다!
 */

// console.log(name);
// var name = "dune";
// console.log(name);
const Hoisting = () => {
  var name;
  console.log(name);
  name = "dune";
  console.log(name);
};

// console.log(sana);
// let sana = "사나";
// console.log(sana);
/**ReferenceError: Cannot access 'sana' before initialization 에러!
 *  에러의 의미 : 변수가 선언되었지만 초기화되기전에 접근하려고할때 발생한다.
 *  호이스팅이 된다는 의미 만약 변수 선언부분을 지우고 접근하려고하면 어떻게 뜰까?
 */

// console.log(mina);

/**
 * ReferenceError: mina is not defined
 * mina라는 변수를 찾을수 없다고 뜬다.
 * 즉 let 역시 호이스팅현상이 발생한다는 것을 알수있다.
 */

/**
 * 내가 이해한 호이스팅은
 * JS코드가 실행되기전 선언된 모든 변수와 상수를 JS에서 파악한후
 * 코드가 실행된다고 이해했다.  즉 Hoisting은 JS의 실행순서와 관련되었다는것을 알수있다.
 * 변수를 선언하지않고 호출했을땐 not defined(정의되지않았다.)의 오류가 뜨지만 변수를 그 어느곳에서라도 선언했다면
 * Hoisting 현상에 의해 initialization 에러가 뜬다는 사실을 알수있다.
 * 나중에 코드 에러가 났을때 어떤 에러인지 파악할수 있다면 조금더 쉽게 error code를 fix할수 있을것같다.
 * ----------------------------------------------------------
 * 그렇다면 현재 var를 사용하지않고 let, const를 사용하는 이유도 여기서 알수있는것같다.
 * 위의 예제 코드를 보면 var는 에러코드를 반환하지않고 undefined를 반환한다.
 * let과 const는 위의 내가 이해한설명처럼 각각 다른 에러를 반환해준다.
 * 즉 var를 사용하는것은 디버깅에 매우 취약하기떄문에 않쓰는것 아닐까? 다른이유가 있을수 있으니 더 공부해보자!
 * ----------------------------------------------------------
 * 알아보니 스코프 동작에 대해 공부할수 있는 좋은기회인것 같다.
 */

/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
const equal = () => {
  console.log(5 === 5);
  // JS는 강제 형변환을 통해 값을 비교한다.
  console.log(5 == "5");

  // 그래서 JS에서는 ===연산자를 통해 값과 타입을 모두 비교한다.
  console.log(5 === "5");
};

/**
 * 삼항 조건 연산자(ternary operator)
 * 10 > 0 ? '맞다' :'아니다' 의 형식
 */
const ternary = () => {
  console.log(19 > 19 ? "맞다" : "아니다");
  // 예전 프로젝트에서 사용해봤는데 렌더링 조건 걸때 사용하기 좋았다! 예를들면 다크모드?
};
/**
 * 논리연산자
 * 1)&& 모든조건이 true여야 값을 true를 반환(AND)
 * 2)|| 둘중 하나가 true면 true를 반환(OR)
 */

const bool = () => {
  console.log(true && true);
  console.log(true && false);

  console.log(true || false);
  console.log(true || true);

  console.log(10 > 1 && 20 > 2 ? "통과" : "실패");
  let sex = "male";
  console.log(19 < 20 && sex === "male" ? "통과" : "불통과");
  console.log(19 > 19 && sex === "male" ? "통과" : "불통과");
};

/**
 * 단축평가 (short circuit evaluation)
 *
 * && 사용시 좌측이 true면 우측값 반환
 * && 사용시 좌측이 false면 좌측값 반환
 * || 사용시 좌측이 true면 좌측값 반환
 * || 사용시 좌측이 false면 우측값 반환
 */
const short = () => {
  console.log(true && "twice");
  console.log(false && "twice");
  console.log(true || "twice");
  console.log(false || "twice");
};

/**
 * null연산자
 *
 * let name;
 * console.log(name)
 *
 * name= name ?? 'dune'
 * console.log(name)
 * 의 값은 dune출력
 *
 * name이 null 이거나 undefined면 dune을 출력한다는 의미
 */

const nullish = () => {
  let dune;
  console.log(dune);
  // dune 이 null,undefine 면 "dune"을 출력
  dune = dune ?? "dune";
  console.log(dune);
  // 하지만 선행코드에서 null연산자를 통해 dune을 넣어주었으므로 calm이 아닌 dune을 출력한다.
  dune = dune ?? "calm";
  console.log(dune);
};
