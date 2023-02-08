const express = require("express");
const router = express.Router();
const Document = require("../controllers/documentController");

router.route("/:id").get(Document.getDocumentById);

router
  .route("/search")
  .get(Document.getDocumentsByQuery)
  .post(Document.getDocumentsByFieldsOrQuery);

module.exports = router;
