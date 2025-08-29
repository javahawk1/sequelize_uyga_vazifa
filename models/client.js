const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Client = sequelize.define("client", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING(50),
    },
    phone_number: {
        type: DataTypes.STRING(15),
        unique: true,
        validate: {
            is: /^\d{2}-\d{3}-\d{2}-\d{2}$/
        }
    },
    email: {
        type: DataTypes.STRING(30),
    },
    address: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING(30),
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Client