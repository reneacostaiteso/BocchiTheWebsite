const express = require('express')
const app = express()
const port = process.env.port || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/saludo', (request, response) =>{
    response.json({mensaje: "hola bro este es el saludo yuujuuuu CRAV"})
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})