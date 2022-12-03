const router = require('express').Router();

const Toon = require('../models/toon.model');
const Tvshow = require('../models/tvShow.model')
const mongoose = require('mongoose')

// GET root TV Show
router.get('/', (req, res, next)=>{
    Tvshow.find()
    .populate('_cast')
    .then((tvshows)=>{
        res.render('tvshow/tvshowList', {tvshows})
    })
    .catch(error => next(error))
    
})


router.get('/create', (req, res, next)=>{
    Toon.find()
    .then((toons)=>{
        res.render('tvshow/new', {toons})
    })
    .catch((error)=>next(error))
})

router.post('/create', (req, res, next)=>{
    const {fieldN, 
    arraySeason, arrayIds} = req.body
    const data = {
        name : fieldN, 
        season: arraySeason != undefined ? arraySeason.split(',') : undefined,
        _cast:arrayIds
    }
    if(arraySeason.lenth){
        data['season'] = arraySeason.split(',')
    }
    Tvshow.create(data)
    .then((tvshowCreated)=>{
        res.redirect('/')
    })
    .catch((error)=>{
        if(error instanceof mongoose.Error.ValidationError){
            return res.status(400).render('tvshow/new', {errorMessage: error.message})
        } 
        if (error.code === 11000){
            return res.status(400).render('tvshow/new', {errorMessage: 'Mensaje de error'})
        }
        return next(error)
    })
    
})


module.exports = router;