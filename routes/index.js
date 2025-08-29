const currencyType = require("./currency_type.routes")
const clientRouter = require("./client.routes")
const router = require("express").Router()

router.use("/client", clientRouter)
router.use("/currency_type", currencyType)

module.exports = router