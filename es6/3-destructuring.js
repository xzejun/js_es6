// 解构

// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);
// const [a, ...others] = [1, 2, 3]; // ...只能放在末尾
// console.log(a, others);

// const obj = {
//     a: {
//         b: 1
//     }
// };
// const { a: { b: c } } = obj;

// console.log(c)


// const obj = {};
// const { a: { b: c } = {} } = obj;
// console.log(c)


// const arr = [{ a: { b: 1 } }, { b: 2 }];
// const [,{ b:c }] = arr;
// console.log(c)



const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

// const { a, b, c, d } = obj;
// console.log(a, b, c, d);

// const { a, ...others } = obj; // 同数组
// console.log(others)


const a = 'abc';
console.log([...a], {...a})