const {DataTypes} = require("sequelize");
const db = require("../db");

const Perguntas = db.define("Perguntas",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    alternativa: {
        type: DataTypes.STRING,
        allowNull:false
    },
    resposta: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Perguntas;