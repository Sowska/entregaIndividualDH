const express = require('express'); //requiriendo express
const path = require ('path'); //necesario para el get

const publicPath = path.join(__dirname, 'public'); // sirve la carpeta con la ruta absoluta guardada en publicPath

const app = express(); // esta linea instancia Express

const port = 3000;

app.use(express.static(publicPath)); //usa mi carpeta public como carpeta de estaticos

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);

});

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
    });

/*app.listen(process.env.PORT || 3000, () => { si viene un puerto, lo toma "process.env.PORT"
    console.log("Levantando un servidor con Express en ", "http://localhost:3000");
}) */