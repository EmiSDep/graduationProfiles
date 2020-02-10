const express = require('express')
const router = express.Router()
const Graduate = require('../models/graduate')

//Getting All
router.get('/', async (req, res) => {
    try {
        const graduates = await Graduate.find()
        res.json(graduates)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})
//Getting One
router.get('/:id', getGraduate, (req, res) => {
    res.send(res.graduate.name)
})
//Creating One
router.post('/', async (req, res) => {
    const graduate = new Graduate({
        name: req.body.name,
        gradYearMonth: req.body.gradYearMonth,
        jobTitle: req.body.jobTitle,
        companyName: req.body.companyName,
        keySkills: req.body.keySkills,
        gitHub: req.body.gitHub,
        linkedIn: req.body.linkedIn,
        twitter: req.body.twitter,
        image: req.body.image
    })
    try {
        const newGraduate = await graduate.save()
        res.status(201).json(newGraduate)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Updating One
router.patch('/', getGraduate, async (req, res) => {
    if (req.body.name != null) {
        res.graduate.name = req.body.name
    }
    if (req.body.gradYearMonth != null) {
        res.graduate.gradYearMonth = req.body.gradYearMonth
    }
    try {
        const updatedGraduate = await res.graduate.save()
        res.json(updatedGraduate)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Deleting One
router.delete('/:id', getGraduate, async (req, res) => {
    try {
        await res.graduate.remove()
        res.json({message: 'Deleted Graduate'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getGraduate(req, res, next) {
    let graduate
    try {
        graduate = await Graduate.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find graduate.'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.graduate = graduate
    next()
}
module.exports = router