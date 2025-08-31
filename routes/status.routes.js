const express = require("express")
const { 
    addStatus,
    updateStatus,
    getStatusById,
    getAllStatus,
    deleteStatusById
} = require("../controllers/status.controller")

const router = express.Router()

router.post("/", addStatus)
router.get("/", getAllStatus)
router.get("/:id", getStatusById)
router.put("/:id", updateStatus)
router.delete("/:id", deleteStatusById)

module.exports = router
