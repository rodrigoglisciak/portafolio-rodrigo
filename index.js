const express = require('express');
const app = express();
const port =  1234;



// 

app.set('views', './vistas');
app.set('view engine' , 'ejs');




// ARCHIVOS ESTATICOS
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./estilos'));




// RUTAS DE LA WEB 
app.use('/', require('./rutas/rutasWeb'));


app.listen(port, ()  => {

    console.log('estoy escuchando en el puerto ' + port);


} );
