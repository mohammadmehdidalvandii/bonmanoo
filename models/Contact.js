const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
});

const model = mongoose.models.Contact || mongoose.model("Contact",schema);

module.exports = model;