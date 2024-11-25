import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// ------------------------------------------------

// class Calculator {
//   add(x: number, y: number) {
//       return x + y;
//   }

//   sub(x: number, y: number) {
//       return x - y;
//   }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// I want to log the arguments passed to the method, when we call the methods
// Where should we write the Code for logging?


// ---------------------------------

// class Calculator {
//   add(x: number, y: number) {
//     console.log(`add fn is called with arguments as ${x}, ${y}`);
//     return x + y;
//   }

//   sub(x: number, y: number) {
//     console.log(`sub fn is called with arguments as ${x}, ${y}`);
//     return x - y;
//   }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// ---------------------------------

// class Calculator {
//   add(x: number, y: number) {
//     Logger.log(`add fn is called with arguments as ${x}, ${y}`);
//     return x + y;
//   }

//   sub(x: number, y: number) {
//     Logger.log(`sub fn is called with arguments as ${x}, ${y}`);
//     return x - y;
//   }
// }

// class Logger {
//   static log(message:string) {
//     console.log(message);
//   }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// --------------------------------- Higher Order Functions (JavaScript)

// class Calculator {
//   add(x: number, y: number) {
//     return x + y;
//   }

//   sub(x: number, y: number) {
//     return x - y;
//   }
// }

// function logHOF(fnRef: (...items: any[]) => any) {
//   return function (...args: any[]) {
//     console.log(`fn is called with arguments as ${args}`);
//     let result = fnRef(...args);
//     return result;
//   }
// }

// var c = new Calculator();

// const addWithLogging = logHOF(c.add);
// const subWithLogging = logHOF(c.sub);

// console.log(addWithLogging(2, 3));
// console.log(subWithLogging(24, 35));

// ------------------------------------ Decorator

// class Calculator {
//   @log
//   add(x: number, y: number) {
//     return x + y;
//   }

//   @log
//   sub(x: number, y: number) {
//     return x - y;
//   }
// }

// function log<T>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {
//   var originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     var fn_args = args.map(arg => JSON.stringify(arg)).join();
//     console.log(`${propertyKey}, is called with arguments as ${fn_args}`);
//     var result = originalMethod.apply(this, args);
//     return result;
//   }

//   return descriptor;
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));