const { app, Tray, Menu } = require('electron');

let tray = null;

app.on('ready', () => {
  tray = new Tray('../assets/TempIcon.png');

  function changeIP(IP:String) {
    console.log(IP)
  }

  let items: Array<String> = ["10.0.0.12", "192.168.0.2"]

  let options: Array<object> = []

  for (let i = 0; i < items.length; i++) {
    options.push({
        label: items[i],
        type: 'radio',
        click: () => changeIP(items[i]) 
    })
  }

  options.push(
    { type: 'separator' },
    { label: 'Quit', type: 'normal', click: () => app.quit() }
  )

  // Create a context menu
  const contextMenu = Menu.buildFromTemplate(options);

  (tray as any).setContextMenu(contextMenu);

  (tray as any).setToolTip('Electron Tray App');
});
