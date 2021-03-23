const {DataTypes} = require("sequelize");
const db = require("../db");

const Bairro= db.define("Bairro",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    }
});

module.exports =Bairro;