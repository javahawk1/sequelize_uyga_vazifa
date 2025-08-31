const { addAdmin,
    updateAdmin,
    getAdminById,
    getAllAdmin,
    deleteAdminById } = require("../controllers/admin.controller")

const router = require("express").Router()

router.post("/", addAdmin)
router.get("/", getAllAdmin)
router.put("/:id", updateAdmin)
router.get("/:id", getAdminById)
router.delete("/:id", deleteAdminById)

module.exports = router
