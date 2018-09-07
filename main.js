const electron = require('electron')

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const Menu = electron.Menu;
const {dialog} = require('electron')

const menuTemplate = [
    {
        label: 'File',
        submenu: [				
        {
            label: 'About ...',
            click: () => {
                console.log('About Clicked');
            }
        }, {
            label: 'Quit',
            click: () => {
                app.quit();
            }
        }, { type: 'separator' } , {
            label: 'Save Project ...',
            click: () => {
                save_project();
            }
        },  {
            label: 'Open Project ...',
            click: () => {
                open_project();
            }
        }
        ]
    }
];

function createWindow () {
	// Create the browser window.
	win = new BrowserWindow({show: false});
	win.maximize();
	win.show();
	console.log(app.getAppPath())
	// and load the index.html of the app.
	win.loadURL(url.format({
		//pathname: path.join(__dirname, 'index.html'),
		pathname: path.join(__dirname, 'editor_bloques/static/demos/blockfactory/index.html'),		
		protocol: 'file:',
		slashes: true
	}))

	//const menu = Menu.buildFromTemplate(menuTemplate);
    //Menu.setApplicationMenu(menu);
} 



app.on('ready', createWindow)	
