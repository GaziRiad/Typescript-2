let userName: string;

userName = "Max";

let userAge: number;

userAge = 22;

let isValid = true;

// string, number, boolean

let userId: string | number = "abc1";
userId = 123;

// let user: object;
// user = "Max";

type User = {
  id: string | number;
  name: string;
  age: number;
  isAdmin: boolean;
};

let user: User;

user = {
  id: "Abc1",
  name: "Riad Hallouch",
  age: 22,
  isAdmin: true,
};

// let hobbies: Array<string>;
let hobbies: string[]; //number[], boolean[]
//{name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];

// function add(a: number, b: number): void {
//   const result = a + b;
//   console.log(result);
// }

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

calculate(2, 3, add);

// Custom types

type AddFn = (a: number, b: number) => number;

function calculater(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

interface Credentials {
  password: string | number;
  email: string;
  username: string;
}

let creds: Credentials;

// interface Credentials {
//   isAdmin: boolean;
// }

creds = {
  email: "riadhallouch447@gmail.com",
  username: "Riad Hallouch",
  password: "let'sdoit",
};
