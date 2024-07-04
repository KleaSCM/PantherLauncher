const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { getSteamGames, getBlizzardGames } = require('./src/gameScanner');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src', 'preload.js'),
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

ipcMain.handle('get-steam-games', async () => {
    return getSteamGames();
});

ipcMain.handle('get-blizzard-games', async () => {
    return getBlizzardGames();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
