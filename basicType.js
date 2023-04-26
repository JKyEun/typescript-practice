// 기본 타입 지정 방법
var car = 'bmw';
var age = 30;
var a = [1, 2, 3];
var a2 = [1, 2, 3];
var week1 = ['mon', 'tue', 'wed'];
var week2 = ['mon', 'tue', 'wed'];
// week1.push(1);
// 튜플 (Tuple)
var b;
b = ['abc', 1];
// b = [1, 'abc'];
b[0].toLowerCase();
// b[1].toLowerCase();
// void, never
// 아무것도 반환하지 않는 경우
function sayHello() {
    console.log('hello');
}
// 항상 에러를 반환하거나 영원히 끝나지 않는 함수
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // Do Something ...
    }
}
// null, undefined
var n = null;
var u = undefined;
// enum
var Os;
(function (Os) {
    Os["Window"] = "Window";
    Os["Ios"] = "Ios";
    Os["Android"] = "Android";
})(Os || (Os = {}));
var myComputer;
myComputer = Os.Window;
// myComputer = 'Window';
console.log(myComputer); // 0
console.log(Os.Window);
console.log(Os.Ios);
console.log(Os.Android);
