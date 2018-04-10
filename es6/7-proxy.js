
//定义一个对象，含有RMB和dollar属性值
var bankAccount = {"RMB":1000,"dollar":0};
//创建一个Proxy代理实例
var banker = new Proxy(bankAccount,{
    //编写get处理程序
    get:function(target, property){
        //判断余额是否大于0
        if(target[property] > 0){
            //有余额，就返回余额值
            return target[property];
        }else{
            //没钱了
            return "余额不足";
        }    
    },
    //编写set处理程序
    set:function(target,property,value){
        //存入的数额必须是一个数字类型
        if(!Number.isInteger(value)){
            return "请设置正确的数值";
        }
        //修改属性的值
        target[property] = value;
    }
});

banker.RMB;
//结果：1000
banker.dollar;
//结果：余额不足

//修改dollar属性的值，值是字符串类型
banker.dollar = "五百";
banker.dollar;
//结果：余额不足

//修改dollar属性的值，值是数字类型
banker.dollar = 500;
banker.dollar;
bankAccount.dollar = 1500;
//结果：500
console.log(banker, bankAccount)