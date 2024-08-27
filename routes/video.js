// routes/video.js
const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.get("/", videoController.getAllVideo);
router.get("/:id", videoController.getVideoById);
router.post("/",videoController.upload.array('files', 1), videoController.createVideo);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
