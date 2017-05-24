module.exports = function main(a,b) { 
	var c;
	if (b == 0){
		console.log("除数不能为0！");
		return 'error:除数不能为0！';
	}else{
		c = a%b; 
		console.log("余数为：" + c);
		return c;
	}	
};