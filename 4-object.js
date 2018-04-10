const obj = {
    a: 1,
    b: 2,
    c: 3,
    g: {
        a: [1, 2, 3]
    }
}
const obj1 = {
    d: 5,
    e: 6,
    f: 7
}
// console.log(obj.a)
// console.log(obj['a'])
// const key = 'a';
// console.log(obj[key])

// for (const k in obj) {
//     // 只能用 for in 遍历
//     console.log(k)
// }
// for (const v of obj) {
//    // error
//     console.log(v)
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.assign(obj, obj1)) // { ...obj, ...obj1 }  两个都是浅copy
// console.log(Object.is(obj, {
//     a: 1,
//     b: 2,
//     c: 3
// })) // 不但值要相等，指向也要相等


// const obj2 = obj;
// console.log(obj2);
// obj.ff = 'ff';
// console.log(obj2)

// const obj3 = { ...obj, ...obj1 };
// obj.g.g = 'g';  // 浅copy 会影响obj3
// obj.g = 'g'; // 不会影响
// console.log(obj3)

// 深copy
const cloneObj = (obj) => {
    const newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};
const res = cloneObj(obj);
console.log(obj, res)
obj.g.a.push(4)
obj.g.g = 'g';
console.log(obj, res)