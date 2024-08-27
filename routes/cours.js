// routes/cours.js
const express = require("express");
const router = express.Router();
const coursController = require("../controllers/coursController");

router.get("/", coursController.getAllCours);
router.get("/:id", coursController.getCoursById);
router.post("/", coursController.createCours);
router.put("/:id", coursController.updateCours);
router.delete("/:id", coursController.deleteCours);

module.exports = router;
