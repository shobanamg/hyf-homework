const express = require("express");
const router = express.Router();
const Document = require("../controllers/documentController");

router.route("/search").get(Document.getDocumentsByQuery);

router.route("/:id").get(Document.getDocumentById);

router.route("/search").post(Document.getDocumentsByFieldsOrQuery);

module.exports = router;
