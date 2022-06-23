const router = require("express").Router();

const { fileUploader } = require("../controller/userController");
const upload = require("../middleware/fileUploader");

router.post("/", upload, fileUploader);

module.exports = router;
