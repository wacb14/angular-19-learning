type methodDecoratorStructure = (
  method: Function,
  context: ClassMethodDecoratorContext
) => PropertyDescriptor | void;

function logMethod(method: Function, context: ClassMethodDecoratorContext) {
  return function (...args: any[]) {
    console.log(`Method ${String(context.name)} called with arguments ${args}`);
    const result = method.apply(this, args);
    console.log(`Method ${String(context.name)} returned ${result}`);

    return result;
  };
}

class Calculator {
  @logMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3); // Method add called with arguments 2,3
// Method add returned 5
