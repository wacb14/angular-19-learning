// A decorator is a function that adds metadata (extra information and functionality) to a class, method, accessor, property, or parameter.

function gentleManApproves<T extends { new (...args: any[]): {} }>(
  constructor: T,
  _context: ClassDecoratorContext
) {
  return class extends constructor {
    gentleman = 'Yes';
  };
}

@gentleManApproves
class MyClass {
  constructor() {}
}
const instance = new MyClass();
console.log((instance as any).gentleman); // MyClass {}
