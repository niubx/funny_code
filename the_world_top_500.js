/* https://baike.baidu.com/item/2020%E5%B9%B4%E3%80%8A%E8%B4%A2%E5%AF%8C%E3%80%8B%E4%B8%96%E7%95%8C500%E5%BC%BA%E6%8E%92%E8%A1%8C%E6%A6%9C/53199743#3 */

let rpc = 0;
let usa = 0;
for (let i = 0; i < 500; i++) {
	let text = list[i].innerText;
	if (text.includes("中国")) {
		list[i].bgColor = "#00FFFF0";
		rpc++;
	}
	if (text.includes("美国")) {
		list[i].bgColor = "#FFFF00";
		usa++;
	}
}
console.log("中国世界500强个数：", rpc, "\n美国世界500强个数：", usa);
