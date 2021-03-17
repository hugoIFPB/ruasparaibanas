require('dotenv').config();
const db = require("./db");
require("./model/Rua");

async function criarTabelas() {
    await db.sync({force:true});
}

criarTabelas();