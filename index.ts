let numOne: number = 1;
let numTwo: number = 2;

function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}

add(numOne, numTwo);

// Tuple 써보기
let tuple: [string, number, boolean, object] = [
  'JKE',
  1,
  true,
  { name: 'JKE' },
];

let str: any = 'hi';
let num: any = 12;
let arr: any = [1, 2];
