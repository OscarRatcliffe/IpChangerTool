const { app, Tray, Menu } = require('electron');
const fs = require('fs');
const { exec } = require('child_process');

let tray = null;

app.on('ready', () => {

  tray = new Tray('assets/TempIcon.png');
  
  function changeIP(IP:String | null) {
    console.log(IP)

    let adapter = "Ethernet 3"
    let subnet = "255.255.0.0"
    let gateway = "10.0.0.1"

    let command = `netsh interface ip set address name='${adapter}' static ${IP} ${subnet} ${gateway}`

    exec(command, (error:any, stdout:any, stderr:any) => {
      
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
      }
    
      if (stderr) {
        console.error(`Command error: ${stderr}`);
        return;
      }
    
      console.log(`Command output: ${stdout}`);
    });
  }

  const IPlist = JSON.parse(fs.readFileSync('data/IPs.json', 'utf8'));

  let items: Array<String> = IPlist.main 

  let options: Array<object> = []

  for (let i = 0; i < items.length; i++) {
    options.push({
        label: items[i],
        type: 'radio',
        click: () => changeIP(items[i]) 
    })
  }

  options.push(
    {label: "DHCP", type: 'radio', click: () => changeIP(null) },
    { type: 'separator' },
    { label: 'Quit', type: 'normal', click: () => app.quit() }
  )

  const contextMenu = Menu.buildFromTemplate(options);

  (tray as any).setContextMenu(contextMenu);

  (tray as any).setToolTip('Electron Tray App');
});
