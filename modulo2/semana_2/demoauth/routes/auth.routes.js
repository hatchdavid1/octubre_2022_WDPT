// Importar 
const router = require('express').Router()
const User = require('../models/User.model')
const bcrypt = require('bcrypt')

// Crear las rutas
router.get('/signup', (req,res, next)=>{
    res.render('authFolder/signup')
})

router.post('/signup', (req, res)=>{
    const {role, ...restBody} = req.body()
    const saltRound = 12
    
    // Para saber si el email está en uso 
    User.find({email:restBody.email})
    .then(foundUser => {
        if(foundUser){
            return res.render('authFolder/signup', {errorMessage: 'Usa otro correo'})
        }
        return bcrypt.genSalt(saltRound)
        .then(salt => bcrypt.hash(restBody.password, salt))
        .then(hashedPassword =>{ 
            return User.create({...restBody, password:hashedPassword})
        })
        .then(userCreated => {
            res.json({user:userCreated})
        })
        .catch(error=>next(error))
    })
    .catch(error=>next(error))
})


// Exportar
module.exports = router;