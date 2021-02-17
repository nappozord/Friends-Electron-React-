const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        icon: path.join(__dirname, '/assets/icon.png'),
        width: 530,
        height: 680,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            backgroundColor:'#7B435B',
        }
    })

    win.removeMenu()

    win.loadFile('index.html');
}

app.whenReady().then(createWindow)