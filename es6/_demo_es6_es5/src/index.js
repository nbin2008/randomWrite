require("babel-polyfill");
let test = "es6 is ok";
let test2 = [1,2].includes(1);
console.log( test );
console.log( test2 );

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(z);


