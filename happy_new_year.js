let intervalFunc = setInterval(() => {
	let time = getTime();
	if (time == "12:37:00") {
		stopIntervalFunc();
		console.log("00:00:00");
		console.log("新年快乐！");
		console.log("Happy new year!");
	} else {
		console.log(time);
	}
}, 1000);

let getTime = () => {
	let dateObject = new Date();
	let currentTime = dateObject.toLocaleTimeString(); //获取当前时间
	let time = currentTime.substring(2);
	return time;
};

let stopIntervalFunc = () => {
	clearInterval(intervalFunc);
};
