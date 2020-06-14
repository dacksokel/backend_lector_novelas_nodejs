const mongoose = require('mongoose')
const URI = 'mongodb://localhost/novelas' // direccion de la base de dato local
mongoose.connect(URI)
.then(db => console.log('base de dato conectado'))
.catch(err => console.error("problemas al conectar la base de datos"))

module.exports = mongoose