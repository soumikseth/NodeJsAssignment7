const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get('/mario', async (req, res) => {
    try {
        const results = await marioModel.find();
        res.json(results);
    } catch (e) {
        res.status(400).json({ error: e })
    }
})
app.get('/mario/:id', async (req, res) => {
    try {
        const results = await marioModel.findById(req.params.id)
        res.json(results);
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})
app.post('/mario', async (req, res) => {
    try {
        const data = new marioModel(req.body);
        await data.save();
        res.status(201).json(data);
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})
app.patch('/mario/:id', async (req, res) => {
    try {
        await marioModel.findByIdAndUpdate(req.params.id, req.body)
        let result = await marioModel.findById(req.params.id)
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})
app.delete('/mario/:id', async (req, res) => {
    try {
       await marioModel.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ message: "character deleted" })

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})




module.exports = app;