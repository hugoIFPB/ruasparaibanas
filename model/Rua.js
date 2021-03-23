const {DataTypes} = require("sequelize");
const db = require("../db");

const Rua = db.define("Rua",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },
    tracobiografico: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Rua;