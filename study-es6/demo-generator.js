// generator函数
function f1(arg){
	let t = new Date().getTime();
	while((new Date().getTime() - t ) < 2000){
	}
	console.log("f1接受的参数:"+arg);
	return "f1";
}

function f2(arg){
	let t = new Date().getTime();
	while((new Date().getTime() - t ) < 2000){
	}
	console.log("f2接受的参数:"+arg);
	return "f2";
}

function f3(arg){
	let t = new Date().getTime();
	while((new Date().getTime() - t ) < 2000){
	}
	console.log("f3接受的参数:"+arg);
	return "f3";
}

// 异步函数
function * gener(arg){
	let r1 = yield f1(arg);
	console.log("异步函数内执行了f1的结果"+JSON.stringify(r1));
	let r2 = yield f2(r1);
	console.log("异步函数内执行了f1的结果"+JSON.stringify(r2));
	let r3 = yield f3(r2);
	console.log("异步函数内执行了f1的结果"+JSON.stringify(r3));
	return r3;
}

let f = gener("参数");
let r1 = f.next();
console.log(r1);
// 此处传入的r1.value是yield f2()中接受的参数
let r2 = f.next(r1.value);
console.log(r2);
let r3 = f.next(r2.value);
console.log(r3);

console.log("其他执行的");