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
}

/*export function isConnect() {
    if (navigator.onLine) {
        alert("Conectado")
    } else {
        alert("Conecte-se")
    }
}
*/
