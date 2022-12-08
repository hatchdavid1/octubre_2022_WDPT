// 1.- 
const router = require('express').Router()
const Task = require('../models/task.model')
// 2-. 
router.get('/', async(req, res, next)=>{
    try{
        const tasks = await Task.find() //-> Regresa un array de todos los documentos
        res.render('task/taskHome', {tasks})
    }catch(error){
        next(error) // <= Regresar a la página = Error 500
    }
})
// crear Task
router.post('/create', async(req, res, next)=>{
    // Todo lo que se manda del front en un form en post llega en el body
    const {title, description}= req.body
    try{
        const taskCreated = await Task.create({title,description})
        console.log('Se creó?', taskCreated);
        res.redirect('/task') // Es para rutas localhost:3000
    
    }catch(error){
        next(error)
    }
})

router.post('/:id/complete', async(req, res, next)=>{
    const {id} = req.params
    const isCompleted = true
    try {                                   // (id, {datosAModificar}, {new:true})
        const taskUpdated = await Task.findByIdAndUpdate(id, {isCompleted}, {new:true})
        console.log('Se actualizó?', taskUpdated);
        res.redirect('/task')
    } catch (error) {
        next(error)
    }
})

router.get('/:id/delete', async(req, res, next)=>{
    const {id} = req.params
    try {
        await Task.findByIdAndDelete(id)
        res.redirect('/task')
    } catch (error) {
        next(error)
    }
})

router.get('/:id/edit', async(req, res, next)=>{
    const {id} = req.params
    try {
        const taskEdit = await Task.findById(id)
        const tasks = await Task.find()
        res.render('task/taskHome', {tasks, taskEdit, isEdit:true})
    
    } catch (error) {
        next(error)
    }
})

route.post('/:id/edit', async(req, res, next)=>{
    const {is} = req.params
    try {
        const taskUpdated2 = await Task.findByIdAndUpdate(id, {...req.body}, {new:true})
        console.log('task 2', taskUpdated2);
        res.redirect('/task')
    } catch (error) {
        next(error)
    }
})

// 3.- 
module.exports = router;