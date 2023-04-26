var jke = 'jke';
var numArr = [1, 2, 3];
var strArr = ['월', '화', '수'];
var jkeObj = {
    name: 'jke',
    age: 27,
    hobbies: ['Music', 'BasketBall'],
};
// null, undefined
var nullDate = null;
var undefinedData = undefined;
// Enum
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["member"] = 2] = "member";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1; // 백엔드에서 받아온 정보라고 가정
// if (userGrade !== 3) {
//   console.log('관리자가 아닙니다!');
// }
// if (userGrade !== MemberGrade.admin) {
//   console.log('관리자가 아닙니다!');
// }
// Union
var unionType = 1;
unionType = 'jke';
unionType = 1;
unionType = [1, 2, 3];
// 이렇게 사용 시 타입스크립트의 의미가 사라지는 것이므로 추천되는 방법은 아니다.
var gender = 'M';
gender = 'F';
// 함수의 리턴 타입 설정
function add1(num1, num2) {
    return num1 + num2;
}
var add2 = function (num1, num2) {
    return num1 + num2;
};
var printFunc = function (num1, num2) {
    console.log(num1 + num2);
};
var data = 1;
data = '1';
var typeArr = [1, '2', 3, '4'];
var jkeGrade = 'A';
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
var userData = [
    { name: 'lee', id: 'faker', age: 26, isMember: true },
    { name: 'ryu', id: 'keria', age: 25 },
];
var jkeInfo = {
    name: 'jke',
    id: 'j56237',
    age: 27,
    isMember: true,
    1: 'A',
    2: 'F',
};
var interfaceAdd = function (x, y) {
    return x + y;
};
console.log(interfaceAdd(1, 5));
