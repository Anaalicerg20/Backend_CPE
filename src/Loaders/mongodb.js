console.log("MONGO_URI lida no MongoDB.js:", process.env.MONGO_URI);
const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect(process.env.MONGO_URI);

    console.log("conectado banco de dados");
}

module.exports = startDB;