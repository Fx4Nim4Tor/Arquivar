const {app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
});

//funcao para criar janela do electron
function creatWindow(){
    
        const  win = new BrowserWindow(
            {
                width: 800,
                height: 600,
                fullscreen: true,
            }
        );

    win.loadFile("index.html");
}

//Cria a janela quando o electron terminou de carregar
app.whenReady().then(creatWindow)

