/*
TODO: Retornar true se está conectado e false se não está
*/

const statusOfConnection = document.querySelector(".status");

export function isConnect() {
	let xhr = new XMLHttpRequest(); //creating new XML object
	xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request on this URL
	xhr.onload = () => {
		//once ajax loaded
		//if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
		//or his/her response status is 200 that means he/she is online
		if (xhr.status == 200 && xhr.status < 300) {
			statusOfConnection.innerText = "Online";
			statusOfConnection.style.color = "#00ed00";
		} else {
			statusOfConnection.innerText = "Offline";
			statusOfConnection.style.color = "#c80000";
		}
	};
	xhr.onerror = () => {
		statusOfConnection.innerText = "Offline";
		statusOfConnection.style.color = "#c80000";
	};
	//sending get request to the passed url

	xhr.send();

	return false;
}

setInterval(() => {
	//this setInterval function call ajax frequently after 100ms
	isConnect();
}, 100);
