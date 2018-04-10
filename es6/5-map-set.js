// set  类似数组 但成员为一
const arr = [1, 2, 3, 1, 2]; // 去重
const s = new Set(arr)
const res = [...s];
console.log(res)


// map 类似对象
// object 无序  map顺序为插入顺序