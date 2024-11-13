const mongoose =require("mongoose");

const schema = new mongoose.Schema({
    productsHome:{
        type: String,
        require:true
    },
    productsHoreca:{
        type: String,
        require:true,
    }
})

const model = mongoose.models.CategoryProducts || mongoose.model("CategoryProduct", schema);

module.exports = model;