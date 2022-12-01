const express = require('express');
const router = express.Router();
// importar modelo a utilizar
const User = require('../models/User.model');


/* GET home page */
router.get("/", (req, res, next) => {
    User.find()
    .then(users=>{
        
        res.render("user/listUsers", {users});
    } )
    .catch(error=>next (error))
    
});
// Ver un formulario 
// localhost:3000
router.get('/create', (req, res, next)=>{
    // res.render('archivo') --> nivel root views 
    // res.render('carpeta/archivo') --> nivel dentro de otra carpeta
    res.render('user/createUser')
})
// Ruta para tener datos en el server (del front al back)
router.post('/create', (req, res, next)=>{
    // req.body Modelo.create({datos})  res.json({...req.body})
    // create(req.body)
    // create({...req.body})
    User.create(req.body)
    .then(userCreated=>{
        console.log('el usuario', userCreated);
        //localhost:3000/user
        res.redirect('/user')
    })
    .catch(error => next(error))
})
// Ruta con params
router.get('/:id/detail',(req, res)=>{
    // const {id} = req.params
    User.findById(req.params.id)
    .then(user=>{
        res.render('user/userDetails', {user})
    })
    .catch(error => next(error))
})

module.exports = router;
