const router = require("express").Router();

const { fileUploader } = require("../controller/userController");
const upload = require("../middleware/fileUploader");
const auth = require("../utils/jwt")

router.post("/upload",auth, upload, fileUploader);

module.exports = router;
