function registerAndModifyArgs(
  method: Function,
  context: ClassMethodDecoratorContext
) {
  return function (...args: any[]) {
    const argsModified = args.map((arg) => {
      typeof arg === 'string' ? arg.toUpperCase() : arg;
    });

    console.log(
      `Method ${String(context.name)} called with args: ${argsModified}`
    );

    return method.apply(this, argsModified);
  };
}

class Wave {
  @registerAndModifyArgs
  wave(param: string) {
    console.log(`Hello ${param}`);
  }
}
