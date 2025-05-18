const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://anaalicerg20:9bxTgvnoqZPnqW3r@cluster2005.4ikgjcq.mongodb.net/?retryWrites=true&w=majority&appName=cluster2005')
    console.log("conectado banco de dados");
}

module.exports = startDB;