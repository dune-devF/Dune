/**
 * Class Keyword
 *
 * 1)  클래스는 객체지향 프로그래밍에서 특정 객체를 생성하기위한
 *     메소드를정의하는 일종의 틀이다.
 */

class IdolModel {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// constructor - 생성자
const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
const won = new IdolModel("장원영", 2005);
console.log(won);
console.log("-----------------------------------");

console.log(yuJin.name);
console.log("-----------------------------------");

class callName {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sayName() {
    return `나는 ${this.name}입니다.`;
  }
}

const sana = new callName("sana", 1997);
console.log(sana.sayName());
console.log("-----------------------------------");
/**
 * Getter와 Setter
 */

class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * Getter
   * - 데이터를 가공해서 새로운 데이터를 반환
   * - private한 값을 반환할때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  /**
   * Setter
   *  - 값을 새로 저장
   *  - 반드시 하나의 파라미터를 받아야함!
   */
  set name(name) {
    this.name = name;
  }
}

const idol1 = new Idol("sana", 1997);
console.log(idol1);
console.log(idol1.nameAndYear);

idol1.name = "사나";
console.log(idol1);

/**
 * Getter 와 Setter를 사용할때
 * - private한 값을 컨트롤 할때 사용한다.
 * - private한 값을 사용하기위해 변수앞에 #을 붙여준다.
 * - Setter는 사실상 사용안함
 */
class IdolModel2 {
  #name;
  year;
  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}
console.log("-----------------------------------");
const sana2 = new IdolModel2("sana", 2003);
console.log(sana2.name);
sana2.name = "사나";
console.log(sana2.name);
console.log("-----------------------------------");
/**
 * Static keyword
 *  - 객체에 귀속되지않음
 */

class IdolModel3 {
  name;
  year;
  static groupName = "twice";
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroupName() {
    return "twice";
  }
}

const nana = new IdolModel3("나연", 2004);
console.log(nana);

console.log(IdolModel3.returnGroupName());
console.log("-----------------------------------");
/**
 * Factory Constructor
 */

class Idol2 {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  static fromObject(object) {
    return new Idol2(object.name, object.year);
  }
  static fromList(list) {
    return new Idol2(list[0], list[1]);
  }
}

const twice2 = Idol2.fromObject({ name: "사나", year: 1997 });
console.log(twice2);

const naYeon = Idol2.fromList(["나연", 1996]);
console.log(naYeon);
console.log("-----------------------------------");

/**
 * Inheritance (상속)
 *  - 객체들 간의 관계를 구축하는 방법
 *  - 상위클래스로부터 속성과 동작을 상속받을수 있다.
 */
