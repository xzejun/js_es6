

// 类（class）  相当于es5 的构造函数
class c1 {
    constructor(){
        this.a = 1;
        this.b = 2;
    }
    aa() {
        console.log('aa')
    }
    static bb() {
        console.log('bb')
    }
}
class c2 extends c1 {
    constructor(props) {
        // 调用父级
        super(props);
    }
    cc() {
        super.aa() // 调用父级的自定义
    }
}
const a = new c2();
a.cc(); // 自定义方法必须使用实例调用
c2.bb() // 静态方法可以直接继承 和 调用

// http://mp.weixin.qq.com/s?__biz=MzA3MDg1NzQyNA==&mid=2649654128&idx=1&sn=8db43d5df6ca2a55617160efee1774a4&scene=21#wechat_redirect