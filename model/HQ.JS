const {DataTypes} = require("sequelize");
const db = require("../db");

const HQ = db.define("HQ",{
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

module.exports =HQ;