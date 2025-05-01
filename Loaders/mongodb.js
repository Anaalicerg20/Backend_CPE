const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://anagomes:ana20@cluster0.zlmrlek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}
module.exports = startDB;