const {DataTypes} = require("sequelize");
const db = require("../db");

const Podcast = db.define("Podcast",{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    audio: {
        type: DataTypes.ABSTRACT,
        allowNull: false
    }
});

module.exports =Podcast;