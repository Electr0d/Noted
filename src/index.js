const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;

const createWindow = () => {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'mainWindow/mainWindow.html'));
};


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});