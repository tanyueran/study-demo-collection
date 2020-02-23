const fs = require('fs');
const path = require('path');

// 写文件
/**
* 注意：__dirname,此处nodejs 如果不使用path的join，而使用相对路径的时候。
* 会让执行js文件命令的路径为基础，进行相对路径寻找。
*/
let basic_url = path.join(__dirname,"./"); 
let msg = `中国加油，武汉加油！！！
加油！~~！！！！
`;

console.log(basic_url);

fs.writeFile(path.join(basic_url,'./test.txt'),msg,"utf8",(err)=>{
	if(err){
		throw err;
	}
	console.log("操作成功-");
});


// 读文件
fs.readFile(path.join(basic_url,"./test.txt"),(err,data)=>{
	if(err) throw err;
	console.log("读取成功-");
	console.log(data.toString("utf8"));
});