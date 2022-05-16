import Vue from "vue";
function GetDefaultConn(port) {
	if (location.protocol.indexOf('https') > -1)
		return 'wss://test.yuanmaster.com:'+port+'?sid=' + getrandom(5).toLocaleString() + '&flag=1'; // 这里注意test.yuanmaster.com替换为自己的子域名
	else
		return 'ws://127.0.0.1:'+port+'?sid=' + getrandom(5).toLocaleString() + '&flag=1';
}
///Vue.prototype.$rules = validate;
// 获取随机数
function getrandom(nums) {
	return ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
}
export default GetDefaultConn;
