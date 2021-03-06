const {DataTypes} = require("sequelize");
const db = require("../db");

const Cidade = db.define("Cidade",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull:false
    }
});

module.exports =  Cidade;