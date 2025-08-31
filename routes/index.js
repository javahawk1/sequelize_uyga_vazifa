const router = require("express").Router()

const currencyType = require("./currency_type.routes")
const clientRouter = require("./client.routes")
const adminRouter = require("./admin.routes")
const statusRouter = require("./status.routes")

router.use("/client", clientRouter)
router.use("/currency_type", currencyType)
router.use("/admin", adminRouter)
router.use("/status", statusRouter)

module.exports = router