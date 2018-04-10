const str = 'HelloWorld';

console.log(str.indexOf('o'));
console.log(str.indexOf('b')); // 找不到 返回 -1
console.log(str.lastIndexOf('o'));
console.log(str.replace('el', 'b'));
console.log(str.slice(1, 3));
console.log(str.split('o')); // 字符串转数组
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(2, 5)); // 不包含start  包含end


console.log(str)

// ES6   模板字符串
const a = 'Hello';
const b = 'World'
console.log(a + b)
console.log(`${a}${b}`)