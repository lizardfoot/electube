/*
	Electube - Node.js/Electron app for YouTube TV

*/
const electon = require("electron")
const {app, BrowserWindow} = require("electron")

app.on("ready", function() {
	var appicon = __dirname + '/assets/youtube-64.png'
	let mainWindow = new BrowserWindow({		
		icon: appicon,
		width: 800,
		height: 600
	})
	mainWindow.once('ready-to-show', () => {
  		mainWindow.show()
	})	
	var url = "https://www.youtube.com/tv#"
	mainWindow.loadURL(url)
})

app.on("window-all-closed", function() {
	app.quit()
})

