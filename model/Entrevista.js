const {DataTypes} = require("sequelize");
const db = require("../db");

const Entrevista = db.define("Entrevista",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports =Entrevista;