/* 
中间件在express、koa、redux中都有存在
其实就是框架的设计者，本身无法一下子设计或者考虑完全，然后预留一个口，并让其他的使用者，接受到需要的参数，然后进行对应改变
*/

class Middleware {
    // 保存中间件函数
    list = [];

    // 加入中间件中函数
    use(fn) {
        this.list.push(fn);
    }

    // 执行下一个中间件函数
    next() {
        if (this.list.length > 0) {
            let fn = this.list.shift();
            fn.call(this, '参数', this.list.length > 0 ? this.next.bind(this) : () => {
                console.log('没有中间件函数了');
            });
        }
    }

    do() {
        console.log('开始执行本身');
        this.next();
    }
}

let app = new Middleware();
app.use((arg, next) => {
    console.log('传入的第一个中间件');
    console.log('1获取到的参数：' + arg);
    next();
});
app.use((arg, next) => {
    console.log('传入的第二个中间件');
    console.log('2获取到的参数：' + arg);
    next();
});
app.use((arg, next) => {
    console.log('传入的第三个中间件');
    console.log('3获取到的参数：' + arg);
    next();
});
// 执行
app.do();