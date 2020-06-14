const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const {mongoose} = require('./database')
//Setting
app.set('port', process.env.PORT || 4000)

//Middleware --> funciones que se ejecuntan antes de llegar a las rutas
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/novelas',require('./routes/novelas.routes'));

//Static files
app.use(express.static(path.join(__dirname,'public')))

//start the server

app.listen(app.get('port'), ()=>{
    console.log(`server on port: ${app.get('port')}`)  
})