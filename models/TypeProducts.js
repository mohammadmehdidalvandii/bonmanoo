const mongoose = require("mongoose");
require('./CategoryProducts')
const schema = new mongoose.Schema({
    name:{
        type: String,
        required :true,
    },
    categoryProduct:{         
                type:  mongoose.Types.ObjectId,
                ref:"CategoryProducts",
                required:true
    }
});

const model = mongoose.models.TypeProducts || mongoose.model("TypeProducts" , schema);
module.exports= model;