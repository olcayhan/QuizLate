const { default: mongoose } = require("mongoose");



const cardSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
}, { collection: "cards" })
module.exports = mongoose.model("Card", cardSchema)


