//1.- importar
const express = require('express');
// Utilizar
const router = express.Router();
// Importar modelo 
const Toon = require('../models/toon.model')
const mongoose = require('mongoose')

// 2.- Crear rutas '/toon' + las que se creen
/* GET Root /toon símbolo => '/' */
router.get('/', (req, res, next) =>{
    // Todos los personajes de la base
    Toon.find()
    .then(toons =>{
        res.render('toon/toonList', {toons})
    })
    .catch(error => next(error))
})



/* GET home page */
router.get("/create", (req, res, next) => {
  res.render("toon/new"); // Es para los archivos en las views
});
// POST para mandar o recibir datos
router.post('/create', (req, res, next) =>{
    // req.body => Es todo lo que se manda del front al back
    //res.json(req.body)
    const {name, catchPhrase, studio, ...restBody} = req.body
    Toon.create({
        name,
        catchPhrase, 
        studio
    })
    .then((toonCreated)=>{
        console.log('Se creo', toonCreated)
        // Hacer un redirect
        res.redirect('/')
    })
    .catch((error)=>{
        if(error instanceof mongoose.Error.ValidationError){
            return res.status(400).render('toon/new', {errorMessage: error.message})
        } 
        if (error.code === 11000){
            return res.status(400).render('toon/new', {errorMessage: 'Mensaje de error'})
        }
        return next(error)
    })
})
// 3.- Exportamos
module.exports = router;
