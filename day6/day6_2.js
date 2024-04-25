/**
 * Inheritance (상속)
 *  - 객체들 간의 관계를 구축하는 방법
 *  - 상위클래스로부터 속성과 동작을 상속받을수 있다.
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//상위 클래스를 상속받아 사용하는법 extends!
class FemaleIdolModel extends IdolModel {
  dance() {
    return `${this.name}님이 춤을 춥니다.`;
  }
}
class maleIdolModel extends IdolModel {
  sing() {
    return `${this.name}님이 노래를 부릅니다.`;
  }
}

const yuJin = new FemaleIdolModel("안유진", 1997);
console.log(yuJin.dance());
console.log(yuJin.year);
const bts = new maleIdolModel("v", 1996);
console.log(bts.sing());
console.log(bts.year);

// 상위 클래스를 하위클래스에서 상속받을수 있지만 반대는 불가능!
const cf = new IdolModel("지훈", 1998);
console.log(cf);
console.log(cf.name);
// console.log(cf.dance())

// 클래스 확인!
console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof maleIdolModel);

console.log("--------------------------------------------");
/**
 * Super Override
 */

class Idols {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sayHello() {
    return `안녕하세요. ${this.name}입니다.`;
  }
}
class FemaleIdolModels extends Idols {
  //노래 ,춤
  part;
  constructor(name, year, part) {
    // super() - 상위 클래스의 constructor를 사용하게해준다
    super(name, year);
    this.part = part;
  }
  sayHello() {
    // return `안녕하세요. ${this.name}입니다. ${this.part}파트를 맡고있습니다.`;
    return `${super.sayHello()} ${this.part}파트를 맡고있습니다.}`;
  }
}

const twice = new FemaleIdolModels("사나", 1997, "보컬");
console.log(twice);

const twice2 = new Idols("나연", 1997, "댄스");

console.log(twice.sayHello());

console.log("--------------------------------------------");

