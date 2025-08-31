const CurrencyType = require("../models/currency_type")

const addCurrencyType = async (req, res) => {
    try {
        const { name, description } = req.body
        const candidate = await CurrencyType.findOne({ where: { name } })
        if (candidate) {
            return res.status(400).send({ message: "Bunday currency type mavjud" })
        }

        const newCurrencyType = await CurrencyType.create({
            name,
            description,
        })

        res.status(201).send({
            message: "New currency type added",
            data: newCurrencyType
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const getAllCurrencyTypes = async (req, res) => {
    try {
        const currencyTypes = await CurrencyType.findAll()

        res.status(200).send({
            message: "All currency types",
            data: currencyTypes
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const getCurrencyTypeById = async (req, res) => {
    try {
        const id = req.params.id
        const currencyType = await CurrencyType.findByPk(id)

        if (!currencyType) {
            return res.status(404).send({ message: "Currency type not found" })
        }

        res.status(200).send({
            message: "Currency type",
            data: currencyType
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const updateCurrencyType = async (req, res) => {
    try {
        const id = req.params.id
        const [count, updated] = await CurrencyType.update(req.body, { where: { id }, returning: true })

        if (count === 0) {
            return res.status(404).send({ message: "Currency type not found" })
        }

        res.status(200).send({
            message: "Currency type updated",
            data: updated[0]
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const deleteCurrencyType = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await CurrencyType.destroy({ where: { id } })

        if (!deleted) {
            return res.status(404).send({ message: "Currency type not found" })
        }

        res.send({
            message: "Currency type deleted"
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

module.exports = {
    addCurrencyType,
    getAllCurrencyTypes,
    getCurrencyTypeById,
    updateCurrencyType,
    deleteCurrencyType
}
