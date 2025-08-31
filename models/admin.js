const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

const Admin = sequelize.define("admin", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    tg_link: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    is_creator: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Admin
