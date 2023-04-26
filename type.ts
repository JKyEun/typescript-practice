const jke: string = 'jke';
const numArr: number[] = [1, 2, 3];
const strArr: Array<string> = ['월', '화', '수'];

const jkeObj: { name: string; age: number; hobbies: string[] } = {
  name: 'jke',
  age: 27,
  hobbies: ['Music', 'BasketBall'],
};

// null, undefined
const nullDate: null = null;
const undefinedData: undefined = undefined;

// Enum
enum MemberGrade {
  guest,
  user,
  member,
  admin,
}

let userGrade: number = 1; // 백엔드에서 받아온 정보라고 가정

// if (userGrade !== 3) {
//   console.log('관리자가 아닙니다!');
// }

// if (userGrade !== MemberGrade.admin) {
//   console.log('관리자가 아닙니다!');
// }

// Union
let unionType: number | string | number[] = 1;
unionType = 'jke';
unionType = 1;
unionType = [1, 2, 3];
// 이렇게 사용 시 타입스크립트의 의미가 사라지는 것이므로 추천되는 방법은 아니다.

let gender: 'M' | 'F' = 'M';
gender = 'F';

// 함수의 리턴 타입 설정
function add1(num1: number, num2: number): number {
  return num1 + num2;
}

const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

const printFunc = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

// type 사용하기
type numOrStr = string | number;
let data: numOrStr = 1;
data = '1';
let typeArr: numOrStr[] = [1, '2', 3, '4'];

type grade = 'A' | 'B' | 'C' | 'D' | 'E';
const jkeGrade: grade = 'A';

// interface
// interface User {
//   name: string;
//   id: string;
//   age: number;
//   isMember?: boolean;
// }

// const jkeInfo: User = {
//   name: 'jke',
//   id: 'j56237',
//   age: 27,
//   isMember: true,
// };

const userData: User[] = [
  { name: 'lee', id: 'faker', age: 26, isMember: true },
  { name: 'ryu', id: 'keria', age: 25 },
];

interface User {
  name: string;
  id: string;
  age: number;
  isMember?: boolean;
  [additional: number]: string;
}

const jkeInfo: User = {
  name: 'jke',
  id: 'j56237',
  age: 27,
  isMember: true,
  1: 'A',
  2: 'F',
};

// 함수에 interface 적용
interface Add {
  (num1: number, num2: number): number;
}

const interfaceAdd: Add = (x, y) => {
  return x + y;
};

console.log(interfaceAdd(1, 5));
