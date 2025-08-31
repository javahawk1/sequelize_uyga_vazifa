const Status = require("../models/status")

const addStatus = async (req, res) => {
    try {
        const { name } = req.body

        const candidate = await Status.findOne({ where: { name } })
        if (candidate) {
            return res.status(400).send({ message: "Bunday status mavzud" })
        }

        const newStatus = await Status.create(req.body)

        res.status(201).send({
            message: "New Status added",
            data: newStatus
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const getAllStatus = async (req, res) => {
    try {
        const status = await Status.findAll()

        res.status(200).send({
            message: "All Status",
            data: status
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const getStatusById = async (req, res) => {
    try {
        const id = req.params.id
        const status = await Status.findByPk(id)

        res.status(200).send({
            message: "Status",
            data: status
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const updateStatus = async (req, res) => {
    try {
        const id = req.params.id
        const updatedStatus = await Status.update(req.body, { where: { id }, returning: true })

        res.status(200).send({
            message: "Status updated",
            data: updatedStatus[1][0]
        })
    } catch (err) {
        res.status(500).send({ err })
    }
}

const deleteStatusById = async (req, res) => {
    try {
        const id = req.params.id
        const deletedStatus = await Status.destroy({ where: { id } })

        res.send({
            message: "Status deleted",
            data: deletedStatus
        })
    } catch (err) {
        res.status(500).send({ err })
    }
}

module.exports = {
    addStatus,
    updateStatus,
    getStatusById,
    getAllStatus,
    deleteStatusById
}
