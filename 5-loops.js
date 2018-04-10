
// let a = 0;
// do {
//     a ++
//     console.log(a)
// } while (a < 10);

// for (let i = 0;  i < 10; i ++) {
//     console.log(i);
// }

const arr = [1, 2, 3, 4];
// for (let i = 0;  i < arr.length; i ++) {
//     console.log(arr[i]);
// }
// for (const v of arr) {  //ES6
//     console.log(v);
// }
// for (const k in arr) {
//     console.log(k, arr[k]);
// }
//arr.map(...fn)  返回值 数组
//arr.forEach(v => console.log(v));

/* 性能：
    chorme： for in 最差  尽量避免使用
    fireFox： forEach  最差

    普通for循环 性能最好
    for of  写法优雅
    map 直接返回数组  方便 优雅

*/