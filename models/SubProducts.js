const mongoose  = require("mongoose");
require("./TypeProducts")
const schema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    typeProduct:{
        type: mongoose.Types.ObjectId,
        ref:"TypeProducts",
        required:true
    }
});

const  model = mongoose.models.SubProducts || mongoose.model("SubProducts",schema);

module.exports = model;