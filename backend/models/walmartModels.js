const mongoose = require ('mongoose')
const Joi = require('joi');


const walmartSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    goods: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    price: {
        type: Number,
        required: true,
        
    },
    cards: {
        type: String,
        required: true,
        enum: ['Gift card', 'Steam card', 'Vanilla']
    },
    products: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
})

const Walmart = mongoose.model('Walmart', walmartSchema);

function validateWalmart(walmart) {
    const schema = {
        fullName: Joi.string().min(5).required(),
        goods: Joi.string().min(5).required(),
        price: Joi.number().required(),
        cards: Joi.string().min(5).required(),
        products: Joi.string().min(5).required()
    }
    return Joi.validate(walmart,schema);

}

exports.walmartSchema = walmartSchema;
exports.Walmart = Walmart;
exports.validate = validateWalmart;