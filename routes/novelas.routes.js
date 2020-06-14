const express = require('express')
const router = express.Router();
const Novelas = require('../models/novelas') // modelos de base de datos novelas

router.get('/', async (req,res)=>{

    const novelas =  await Novelas.find()
         
    res.json(novelas);
})

router.post('/',async (req,res)=>{
    
    const {nombre, autor, fuente, imagen, resumen} = req.body
    const novelas = new Novelas({nombre, autor, fuente, imagen, resumen }) //con esto lo guardamos en la base de dato
    await novelas.save()
    
    res.json({
        estado:'tarea guardada'
    })
})

router.put('/:id', async (req,res)=>{
    const {nombre, autor, fuente, imagen, resumen} = req.body
    const novelasU = {nombre, autor, fuente, imagen, resumen}
    // console.log(req.params.id)
    await Novelas.findByIdAndUpdate(req.params.id, novelasU)
    res.json({
        estado: 'novela actualizada'
    })    
})

router.delete('/:id',
async (req,res)=>{
    await Novelas.findByIdAndDelete(req.params.id)
    res.json({estado:'Novela borrada'})
})
module.exports = router;