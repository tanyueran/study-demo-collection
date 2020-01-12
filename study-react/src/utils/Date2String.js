export default function (date) {
	if (!(date instanceof Date)) {
		return '-';
	}
	return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`;
}