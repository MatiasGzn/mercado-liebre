//Requiero los paquetes:
const express = require("express");
const path = require("path")

const app = express();

//Declarar los recursos estaticos:
app.use(express.static("public"))

//Poner a escuchar al servidor:
/* app.listen(3032, () => console.log("Servidor corriendo")) */

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Servidor corriendo en el puerto ${port}'));

//Manejo de rutas:
//Ruta raiz "/"":
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))
})

//Ruta register:
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"))
})

//Ruta ligin:
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"))
})