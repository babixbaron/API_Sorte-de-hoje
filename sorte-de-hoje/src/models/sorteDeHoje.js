const mongoose = require('mongoose')

const sorteDeHojeSchema = mongoose.Schema({

    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: mongoose.Types.ObjectId
    },

    text: {
        type: String,
        required: true
    }
})

const Model = mongoose.model('sorte', sorteDeHojeSchema)

module.exports = Model