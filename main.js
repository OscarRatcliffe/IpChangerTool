const { app, Tray, Menu } = require('electron');

let tray = null;

app.on('ready', () => {
  tray = new Tray('assets/TempIcon.png');

  // Create a context menu
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Option 1', type: 'normal', click: () => console.log('Option 1 clicked') },
    { label: 'Option 2', type: 'normal', click: () => console.log('Option 2 clicked') },
    { type: 'separator' },
    { label: 'Quit', type: 'normal', click: () => app.quit() },
  ]);

  // Set the context menu for the tray
  tray.setContextMenu(contextMenu);

  // Optional: Show a tooltip when hovering over the tray icon
  tray.setToolTip('Electron Tray App');
});
