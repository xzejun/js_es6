// function f1 () {
//     //do something
// }

// const f2 = function() {
//     //do something
// }

// 箭头函数（ES6）
// const f3 = () => { 
//     //do something
// }

// this 指向 调用函数的那个对象
// 箭头函数 this指向
// const a = {
//     b: 1,
//     c: function() {
//         console.log(this);
//     }
// }
// const d = {a: 1}
// const a = {
//     b: 1,
//     c: () => {
//         this.b = 2;
//         console.log(this);
//     }
// }
// a.c.bind(d)(); // 箭头函数不能重新定义this
// a.c()
// console.log(module.exports)

// const f1 = function (args) {
//     return args * args
// }
// const f2 = function (arg1, arg2, arg3) {
//     console.log(arguments);
//     console.log(arguments[0]);
// }
// console.log(f1(2))
// f2(1, 2, 3)

// const f3 = function(arg1) {
//     return function(arg2) {
//         return arg1 + arg2;
//     }
// }
// console.log(f3(1));
// console.log(f3(1)(2));
