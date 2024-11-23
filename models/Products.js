const mongoose = require("mongoose");
require('./CategoryProducts');
require('./TypeProducts');
require('./SubProducts');

const schema = new mongoose.Schema({
    titleEn : {
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true,
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "CategoryProducts",
        required: true,
    },
    typeProduct:{
        type: mongoose.Types.ObjectId,
        ref: "TypeProducts",
        required: true,
    },
    subProduct:{
        type:mongoose.Types.ObjectId,
        ref:"SubProducts",
    },
    description:{
        type: String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    method:{
        type: String,
        required: true,
    },
    growRegion:{
        type: String,
        required : true,
    },
    taste:{
        type: String,
        required: true,
    },
    sweet:{
        type: String,
        required: true, 
    },
    liquid:{
        type: String,
        required: true,
    },
    acidity:{
        type: String,
        required: true,
    },
    software:{
        type: String,
        required: true,
    },
    packaging:{
        type: String,
        required: true,
    },
    subModel:{
        type: String,
        required: true,
    },
    materials:{
        type: String,
        required: true, 
    },
    height:{
        type: String,
        required: true,
    },
    caffeine:{
        type: String,
        required: true,
    },
    beforeTaste:{
        type: String,
        required: true,
    },
    scent:{
        type: String,
        required: true,
    },
    roastCurry:{
        type: String,
        required: true,
    },
    bitterness:{
        type: String,
        required: true,
    },
    dimensionsPack:{
        type: String,
        required: true,
    },
    create:{
        type: String,
        required: true,
    },
    tags:{
        type: [String],
        required: true,
    },
    price:{
        type :String,
        required: true,
    },
    img:{
        type: [String],
        required: true,
    },
});

const model = mongoose.models.Products || mongoose.model("Products" ,schema);

module.exports = model;
