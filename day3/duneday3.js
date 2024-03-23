// /**
//  *
//  * IF and Switch
//  *
//  */

// let num = 2;
// if (num % 2 === 0) {
//   console.log("짝수입니다.");
// } else if (num % 2 === 1) {
//   console.log("홀수입니다.");
// } else {
//   console.log("숫자가아닙니다.");
// }

// const engDay = "monday";

// let korDay;

// switch (engDay) {
//   case "monday":
//     korDay = "월요일";
//     break;
//   case "tuesday":
//     korDay = "화요일";
//     break;
//   case "wednesday":
//     korDay = "수요일";
//     break;
//   case "thursday":
//     korDay = "목요일";
//     break;
//   case "friday":
//     korDay = "금요일";
//     break;
//   case "saturday":
//     korDay = "토요일";
//     break;
//   case "sunday":
//     korDay = "일요일";
//     break;
// }
// console.log(korDay);
// console.log("============================================");

// /**
//  * Loops
//  *
//  * 1) for
//  * 2) while
//  */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("============================================");

// for (let i = 1; i < 3; i++) {
//   for (let j = 3; j > 0; j--) {
//     console.log(i, j);
//   }
// }

// let square = "";
// let side = 6;

// for (let i = 0; i <= 5; i++) {
//   for (let k = 0; k < side; k++) {
//     square += "* ";
//   }
//   square += `\n`;
// }
// console.log(square);
// console.log("============================================");
// /** for...in */
// const sana = {
//   name: "사나",
//   year: 2024,
//   group: "twice",
// };

// for (let key in sana) {
//   console.log(key);
// }

// const twiceMemberArr = [
//   "나연",
//   "정현",
//   "모모",
//   "사나",
//   "지효",
//   "미나",
//   "다현",
//   "채영",
//   "쯔위",
// ];
// // for...in 인덱스 출력
// for (let key in twiceMemberArr) {
//   console.log(`${key}:${twiceMemberArr[key]}`);
// }

// // for...of 값출력
// for (let value of twiceMemberArr) {
//   console.log(value);
// }

// /**
//  * while
//  */

// let number = 0;
// while (number < 10) {
//   number++;
//   console.log(number);
// }
// console.log("============================================");
// /**
//  * break
//  */

// for (let i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// console.log("============================================");
// number = 0;
// while (number < 10) {
//   if (number === 5) {
//     break;
//   }

//   number++;
//   console.log(number);
// }
// console.log("============================================");
// /**
//  * continue
//  *  - 만약 값이 true라면 그해당 부분만 skip한다.
//  */
// number = 0;
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }
// console.log("============================================");

// number = 0;

// while (number < 10) {
//   number++;
//   if (number === 6) {
//     continue;
//   }
//   console.log(number);
// }

// console.log("============================================");

// /**
//  * 타입변환
//  *  1)명시적
//  *  2)암묵적
//  */

// let age = 27;

// // 명시적
// let stringAge = age.toString();
// console.log(typeof age);
// console.log(typeof stringAge, stringAge);
// //암묵적
// let test = age + "";
// console.log(typeof test, test);

// console.log(typeof ("98" + 2));
// console.log("98" * 2);

// console.log("============================================");

// /**
//  * Boolean 타입으로 변환
//  */
// console.log(!!"x");

// console.log("============================================");

let box = "";

for (let i = 0; i <= 5; i++) {
  let boxNum = i < 3 ? i : 6 - i;
  // 왼쪽 공백 추가
  for (let j = 0; j < 3 - boxNum; j++) {
    box += " ";
  }

  for (let k = 0; k < boxNum; k++) {
    box += "* ";
  }
  box += `\n`;
}

console.log(box);
