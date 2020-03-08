// aysnc函数===有点儿像是generator函数与promise的语法糖
function f1(arg){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("f1接受到的参数："+arg);
			resolve('f1');
		},2000);
	});
}

function f2(arg){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("f2接受到的参数："+arg);
			resolve('f2');
		},2000);
	});
}

function f3(arg){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log("f3接受到的参数："+arg);
			resolve('f3');
		},2000);
	});
}

let f = async function(arg){
	// 此处的r1是f1 resolve函数传入的值
	let r1 = await f1(arg);
	console.log("f1执行的结果"+r1);
	let r2 = await f2(r1);
	console.log("f1执行的结果"+r2);
	let r3 = await f3(r2);
	console.log("f1执行的结果"+r3);
	return r3;
}

// 下面的参数传递给f的形参arg
f("给f1的参数").then(data=>{// 接受的data是f返回的r3
	console.log("123:" + data);
});
console.log("其他的执行的");
