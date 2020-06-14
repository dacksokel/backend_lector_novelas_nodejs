// aqui es donde va el modelo de las novelas
const mongoose = require('mongoose')
const {Schema} = mongoose;

const NovelasSchema = new Schema({
    nombre:{ type: String, required: true},
    autor:{type:String, required:true},
    fuente:{type:String, required:true},
    imagen:{type:String, required:true},
    resumen:{type:String, required:true}
})

module.exports = mongoose.model('novelas', NovelasSchema)