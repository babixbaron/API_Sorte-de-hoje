const SorteDeHojeModel = require('../models/sorteDeHoje')

const createSorte = async (req, res) => {
    try {
        const {text} = req.body

        const newSorte = new SorteDeHojeModel({
            text
        })

        const savedSorte = await newSorte.save()

        res.status(201).json(savedSorte)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const findAllSortes = async (req, res) => {
    try {
        const allSorte = await SorteDeHojeModel.find()
        res.status(200).json(allSorte)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findSorteById = async (req, res) => {
    try {
        const findSorte = await SorteDeHojeModel.findById(req.params.id)
        res.status(200).json(findSorte)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateSorte = async (req, res) => {
    try {
        const {text} = req.body
        const updatedSorte = await SorteDeHojeModel.findByIdAndUpdate(req.params.id, {
            text
        })

        res.status(200).json(updatedSorte)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message : error.message })
    }
}

const deleteSorte = async (req, res) => {
    try {
        const { id } = req.params   
        await SorteDeHojeModel.findByIdAndDelete(req.params.id)
        const message = `Sorte de hoje com id: ${id} removida com sucesso.`
        res.status(200).json(message)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createSorte,
    findAllSortes,
    findSorteById,
    updateSorte,
    deleteSorte
}