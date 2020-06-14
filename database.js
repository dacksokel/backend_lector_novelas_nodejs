const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/novelas' // direccion de la base de dato local
mongoose.connect(URI,{
    //solucion al error que daba al conectar la base de datos
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true 
})
.then(db => console.log('base de dato conectado'))
.catch(err => console.error("problemas al conectar la base de datos"))

module.exports = mongoose