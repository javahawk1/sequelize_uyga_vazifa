const Admin = require("../models/admin")

const addAdmin = async (req, res) => {
    try {
        const { email } = req.body
        const candidate = await Admin.findOne({ where: { email } })
        if (candidate) {
            return res.status(400).send({ message: "Bunday admin mavzud" })
        }

        const newAdmin = await Admin.create(req.body)

        res.status(201).send({
            message: "New Admin added",
            data: newAdmin
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}


const getAllAdmin = async (req, res) => {
    try {
        const Admins = await Admin.findAll()

        res.status(200).send({
            message: "All Admins",
            data: Admins
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const getAdminById = async (req, res) => {
    try {
        const id = req.params.id
        const admin = await Admin.findByPk(id)

        res.status(200).send({
            message: "Admin",
            data: admin
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ err })
    }
}

const updateAdmin = async (req, res) => {
    try {
        const id = req.params.id
        const updatedAdmin = await Admin.update(req.body, { where: { id }, returning: true })

        console.log(updatedAdmin)
        res.status(200).send({
            message: "Admin updated",
            data: updatedAdmin[1][0]
        })
    } catch (err) {
        res.status(500).send({ err })
    }
}

const deleteAdminById = async (req, res) => {
    try {
        const id = req.params.id
        const deletedAdmin = await Admin.destroy({ where: { id } })

        res.send({
            message: "Admin deleted",
            data: deletedAdmin
        })
    } catch (err) {
        res.status(500).send({ err })
    }
}

module.exports = {
    addAdmin,
    updateAdmin,
    getAdminById,
    getAllAdmin,
    deleteAdminById
}
