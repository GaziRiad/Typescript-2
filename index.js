var userName;
userName = "Max";
var userAge;
userAge = 22;
var isValid = true;
// string, number, boolean
var userId = "abc1";
userId = 123;
// let user: object;
// user = "Max";
var user;
user = {
    id: "Abc1",
    name: "Riad Hallouch",
    age: 22,
    isAdmin: true,
};
// let hobbies: Array<string>;
var hobbies; //number[], boolean[]
//{name: string; age: number}[]
hobbies = ["Sports", "Cooking", "Reading"];
// function add(a: number, b: number): void {
//   const result = a + b;
//   console.log(result);
// }
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 3, add);
