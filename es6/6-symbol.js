const a = {
    a: 1,
    b: 2,
    c: 3
}
// 假如a为引入其他方式的对象，当不知道a中到底有什么属性名，想要给a添加一个新的属性。
const s = Symbol('a');
a[s] = 'sysbol1';


const f = Symbol('a');
a[f] = 'sysbol2';

// console.log(s === f) // false

// console.log(a)

// // Symbol 不能遍历
// for (const v in a) {
//     console.log(v)
// }
// console.log(Object.getOwnPropertySymbols(a))
// console.log(Object.keys(a)) // 依然找不到 Symbol


const s1 = Symbol.for('a')
const s2 = Symbol.for('a')
a[s1] = 'sysbol1';
a[s2] = 'sysbol2';
console.log(s1 === s2) // true
console.log(a)