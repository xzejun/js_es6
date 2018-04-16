/* const  [...a, b] = [1, 2, 3, 4, 5];
console.log(a, b)//error */

/* const fn = ({ a, b }) => console.log(a, b);
fn({a:{b: 0}})
fn({a:1, b: 2, c: 3})
{ b: 0 } undefined
1 2 */

/* const fn = ({ a, ...b }) => console.log(a, b);
    fn({a:{b: 0}})
    fn({a:1, b: 2, c: 3})
    { b: 0 } {}
1 { b: 2, c: 3 } */

/* const obj = {
    a: 1,
    b: () => console.log(this.a)
}
obj.b.bind({a: 2})() *///undefined
//箭头函数内this对应定义时外层的this（可以理解为箭头函数为表达式，无自己的this）

/* const {a, b: { c }} = {a: {b: 1}} ;
    console.log(a, c) */
    //Cannot destructure property `c` of 'undefined' or 'null'.

/*     for (var i = 0; i < 3; i++) {
        setTimeout(function() {
          console.log(i);
        }, 10);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(function() {
          console.log(i);
        }, 10);
      }
3
3
3
0
1
2 */

/* const a = {
    a: 1,
    b: {
      c: 2
    }
  };
  const b = {
    a: 1,
    b: {
      d: 3
    }
  };
  const c = { ...a, ...b };
  a.b.c = 4;
  b.b.d = 5;
  console.log(c); *///{ a: 1, b: { d: 5 } }

  /* const [a = 2, { b: [c, d = 3] }] = [1, { b: [{ c: 2 }] }];
  console.log(a, c, d); */
  //1 { c: 2 } 3

  /* const fn1 = (a = 3, b = 4) => {
    a * b;
  };
  const fn2 = (a = 3, b = 4) => a * b;
  console.log(fn1(2));
  console.log(fn2(2));
undefined
8
第一个带{} 没有返回值 return */

/* const p = new Promise(function(resolve, reject) {
    console.log(1);
    resolve(2);
  });
  p.then(console.log);
  console.log(3); *///1 3 2

/* const promiseList = [1, 2, 3].map(v => Promise.resolve(v * v));
Promise.all(promiseList).then(res => console.log(res));
//[ 1, 4, 9 ] */

/* console.log([] === [])
console.log({} === {})
console.log(undefined === undefined)
console.log(NAN === NAN)
console.log(NULL === NULL)
false
false
true
false
true */


const a= [];
function fn(arg) {
  arg.push(1);
  return arg;
}
console.log(a=== fn(a))   //是否正确？ true