const express = require('express'); //requiriendo express
const path = require ('path'); //necesario para el get

const publicPath = path.join(__dirname, 'public'); // sirve la carpeta con la ruta absoluta guardada en publicPath

const app = express(); // esta linea instancia Express

const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //usa mi carpeta public como carpeta de estaticos


app.get('/',(req,res) => {
res.sendFile(path.join(__dirname, './views/home.html'));
    });

app.get('/register',(req,res) => {
res.sendFile(path.join(__dirname, './views/register.html'));
    });

app.get('/login',(req,res) => {
res.sendFile(path.join(__dirname, './views/login.html'));
});

app.post('/home', (req, res) => {
    /*console.log(req.body);
    Guardar en el sistema
    users.push(req.body);*/
    // Redireccionamos a la pagina
    res.redirect('/');
});

app.listen(port, () => {
    console.log("Server started succesfully");

});