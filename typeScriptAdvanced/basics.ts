// What's TypeScript? It's Javascript with steroids
// Does JavaScript have types? Yes, but they are dynamic types
// What are TypeScript types? They are strict types

// function add(a, b) {
//   return a + b;
// } [JS]

function add(a: number, b: number): number {
  return a + b;
}

// add => function (a,b)=>any [JS]
// add => function(number, number)=> number [TS]
// V8 Engine
// add => function (string, number) => string [JS]

const result = add(1, 2); //3
// const b = add ("a",2) //"a2" [JS]

// TypeScript is only used during development, it is not used in production

// BUNDLER
// 1. Transpile TypeScript to JavaScript
// 2. Uglyfy the code
// 3. Miniify the code
// 4. Tree shaking

// Primitive Types = string, number, boolean
let a: unknown = 1;
a = '1';
a = [1];

interface User {
  name: string;
  getName: () => string;
  setName: (name: string) => void;
}

interface Student extends User {
  id: string;
}

class UserClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

// const user: User = { // Why is this working? Cause it fits the interface and the class (Shape)
const user: UserClass = {
  name: 'John',
  getName: () => {
    return 'Jhon';
  },
  setName: (name: string) => {},
};

const userClass: UserClass = new UserClass('Joao');

interface Admin{
    id:string;
}

type UserType = {
  name: string;
  getName: () => string;
  setName: (name: string) => void;
};

// Types are more flexible than interfaces
type GodType = UserType & Admin; // Intersection (both must be satisfied)
type SemiGodType = UserType | Admin; // Union (at least one must be satisfied)
