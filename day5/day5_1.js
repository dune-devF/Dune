/**
 * try...catch
 *
 * 1) 발생시킬때 -> 던진다고한다.(throw)
 * 2) 명시적으로 인지할때 -. 잡는다고한다.(catch)
 *
 */

/**
 * function runner() {
  console.log("hello");
  throw new Error("예상치 못한 error가 발생했습니다.");
  console.log("code");
}
runner();
 */

/**
 * 실행순서
 * - 함수가 실행
 * - 안녕을 출력
 * - throw를 통해 에러 발생
 * - code를 출력하지않고 catch로 이동
 * - error출력
 */
function run() {
  try {
    console.log("안녕");
    throw new Error("예상치 못한 error가 발생했습니다.");
    console.log("code");
  } catch (e) {
    console.log("-----catch-----");
    console.log(e);
  } finally {
    //try에서 에러의 유무 상관없이 finally는 반드시 실행된다. try catch 문에서 finally는 option이다.
    console.log("-----finally-----");
  }
}

run();
