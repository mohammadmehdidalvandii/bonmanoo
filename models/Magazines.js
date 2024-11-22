const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});

const model = mongoose.models.Magazines || mongoose.model("Magazines" , schema);

module.exports = model;