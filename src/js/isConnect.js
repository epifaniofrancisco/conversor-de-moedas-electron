export function isConnect() {
	const setStatus = (status) => {
		const statusNode = document.getElementById("status");
		statusNode.innerText = status ? "online" : "offline";
	};

	setStatus(navigator.onLine);

	window.addEventListener("online", (e) => {
		setStatus(true);
	});

	window.addEventListener("offline", (e) => {
		setStatus(false);
	});

	return navigator.onLine ? true : false;
}
