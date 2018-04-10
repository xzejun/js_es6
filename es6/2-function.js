//箭头函数
// 8-function

// 函数默认值
// const fn = (a = 2, b = 3, c = 4) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// fn()
// fn(11, 22)

// 参数

// 扩展运算符
const fn = (a, ...b) => {
    console.log(a)
    console.log(b)
}

// fn(1, 2, 3, 4)