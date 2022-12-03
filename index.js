// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const fs = require('fs')

oi = {
  "primeiro": 1,
  "segundo": 2
}

function writeJsonFile(text) {
	const data = JSON.stringify(text);

	try {
		fs.writeFile("nada.json", data, (err) => {
			if (err) {
				throw err;
			}

			console.log("Finished");
		});
	} catch (error) {
		console.error(err);
	}
}

function readJsonFile() {
	fs.readFile("data.json", "utf-8", (err, data) => {
		if (err) {
			throw err;
		}

		const user = JSON.parse(data.toString());

		console.log(user);
	});
}

const createWindow = () => {

  writeJsonFile(oi)
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(() => {
  writeJsonFile(oi)
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.