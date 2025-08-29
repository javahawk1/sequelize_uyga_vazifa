const Client = require("../models/client");

const addClient = async (req, res) => {
    try {
        const { full_name, phone_number, email, address, location } = req.body;

        const candidate = await Client.findOne({ where: { email } });
        if (candidate) {
            return res.status(400).send({ message: "Bunday mijoz mavzud" });
        }

        const newClient = await Client.create({
            full_name,
            phone_number,
            email,
            address,
            location,
        });

        res.status(201).send({
            message: "New client added",
            data: newClient
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err });
    }
}

const getAllClient = async (req, res) => {
    try {
        const clients = await Client.findAll()

        res.status(200).send({
            message: "All clients",
            data: clients
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err });
    }
}

const getClientById = async (req, res) => {
    try {
        const id = req.params.id
        const client = await Client.findByPk(id)

        res.status(200).send({
            message: "client",
            data: client
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err });
    }
}

const updateClient = async (req, res) => {
    try {
        const id = req.params.id
        const updatedClient = await Client.update(req.body, { where: { id }, returning: true })

        console.log(updatedClient)
        res.status(200).send({
            message: "Client updated",
            data: updatedClient[1][0]
        })
    } catch (err) {
        res.status(500).send({ err })
    }
}

const deleteClientById = async (req, res) => {
    try {
        const id = req.params.id
        const deletedClient = await Client.destroy({ where: { id } })

        res.send({
            message: "Client deleted",
            data: deletedClient
        })
    } catch (err) {
        res.status(500).send({ err })
    }
}

module.exports = {
    addClient,
    updateClient,
    getClientById,
    getAllClient,
    deleteClientById
};
