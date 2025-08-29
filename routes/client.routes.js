const { addClient, updateClient, getClientById, getAllClient, deleteClientById } = require("../controllers/client.controller")

const router = require("express").Router()

router.post("/", addClient)
router.get("/", getAllClient)
router.put("/:id", updateClient)
router.get("/:id", getClientById)
router.delete("/:id", deleteClientById)

module.exports = router
