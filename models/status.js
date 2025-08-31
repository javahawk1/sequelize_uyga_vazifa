const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Status = sequelize.define("status", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
})

module.exports = Status
