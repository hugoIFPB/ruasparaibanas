const {DataTypes} = require("sequelize");
const db = require("../db");

const Administrador = db.define("Administrador",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports =Administrador;