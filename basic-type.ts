// 기본 타입 지정 방법
const car: string = 'bmw';
const age: number = 30;
const a: number[] = [1, 2, 3];
const a2: Array<number> = [1, 2, 3];

const week1: string[] = ['mon', 'tue', 'wed'];
const week2: Array<string> = ['mon', 'tue', 'wed'];

// week1.push(1);

// 튜플 (Tuple)
let b: [string, number];

b = ['abc', 1];
// b = [1, 'abc'];

b[0].toLowerCase();
// b[1].toLowerCase();

// void, never

// 아무것도 반환하지 않는 경우
function sayHello(): void {
  console.log('hello');
}

// 항상 에러를 반환하거나 영원히 끝나지 않는 함수
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // Do Something ...
  }
}

// null, undefined
const n: null = null;
const u: undefined = undefined;

// enum
enum Os {
  Window = 'Window',
  Ios = 'Ios',
  Android = 'Android',
}

let myComputer: Os;
myComputer = Os.Window;
// myComputer = 'Window';
console.log(myComputer); // 0

console.log(Os.Window);
console.log(Os.Ios);
console.log(Os.Android);
