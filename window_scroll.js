/* 窗口滑动事件，显示当前窗口坐标 */
window.onscroll = () => {
	console.log(window.scrollX);
	console.log(window.scrollY);
};

/* 一个自执行函数，跳转到指定窗口位置 */
(function to() {
	window.scrollTo(0, 10000);
})();
