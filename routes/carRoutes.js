import express from 'express'
const carRouter = express.Router();

import Car from '../models/carModel.js';

// GET
carRouter.get('/', async (req, res) => {

    
    let toFind = {}
    if (req.query.marca != undefined && req.query.ano != undefined) {
        toFind.marca = req.query.marca
        toFind.ano = req.query.ano
    } else if (req.query.marca == undefined && req.query.ano != undefined) {
        toFind.ano = req.query.ano
    } else if (req.query.marca != undefined && req.query.ano == undefined) {
        toFind.marca = req.query.marca;
        console.log(toFind);
    }
    const cars = await Car.find(toFind);

    res.send(cars);      
})
carRouter.get('/:id', async (req, res) => {
    let car = await Car.findById(req.params.id);
    
    if (car) {
        res.send(car)
        console.log(car)
    }
})

// POST
carRouter.post('/', async (req, res) => { 
    let newCar = await new Car(req.body);

    newCar.save();
    res.json(newCar);
})

// PUT
carRouter.put('/:id', async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send("Updated!")
})

// PATCH    
carRouter.patch('/:id', async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send("Updated!")
})

// DELETE
carRouter.delete('/:id', async (req, res) => {
    const postRemoved = await Car.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(204)
})


export default carRouter;