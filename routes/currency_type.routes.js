const express = require("express")
const { 
    addCurrencyType, 
    getAllCurrencyTypes, 
    getCurrencyTypeById, 
    updateCurrencyType, 
    deleteCurrencyType 
} = require("../controllers/currency_type.controller")

const router = express.Router()

router.post("/", addCurrencyType)
router.get("/", getAllCurrencyTypes)
router.get("/:id", getCurrencyTypeById)
router.put("/:id", updateCurrencyType)
router.delete("/:id", deleteCurrencyType)

module.exports = router
