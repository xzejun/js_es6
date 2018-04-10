// ((...x, xs) => console.log(x))(1, 2, 3) // 返回值x

// const [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(a, b, c, d);

// const { b, e, ...a } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// console.log(b, e, a);


// const arr = [];
// for (const { x = 2, y } of [{ x: 1 }, {}, { y: 2 }]) { 
//   arr.push(x, y);
// }
// console.log(arr);


// const [{ a: { b: c, f } }, { d: { e = 2 } }] = [{ a: { b: 1 } }, { d: { f: 4 } }];
// 定义的变量名 和值 分别为多少
