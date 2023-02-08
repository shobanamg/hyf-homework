const documents = require("../model/document.json");

const searchDocumentsByQuery = (q) => {
  return documents.filter((item) =>
    Object.values(item).some(
      (val) => typeof val === "string" && val.includes(q)
    )
  );
};

const searchDocumentByFields = (fields) => {
  return documents.filter((item) =>
    Object.keys(fields).every(
      (key) =>
        item[key] &&
        item[key]
          .toString()
          .toLowerCase()
          .includes(fields[key].toString().toLowerCase())
    )
  );
};

const getDocumentById = (req, res) => {
  try {
    const document = documents.find(
      (document) => document.id === Number(req.params.id)
    );

    document && Object.keys(document).length > 0
      ? res.status(200).json(document)
      : res.status(404).json("No document found");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve the document" });
  }
};

const getDocumentsByQuery = (req, res) => {
  try {
    const filteredDocuments = searchDocumentsByQuery(req.query.q);
    filteredDocuments.length > 0
      ? res.status(200).json(filteredDocuments)
      : res.status(200).json(documents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve the document" });
  }
};

const getDocumentsByFieldsOrQuery = (req, res) => {
  try {
    const fields = req.body.fields;
    const q = req.query.q;

    if ((fields && q) || (!fields && !q)) {
      return res
        .status(400)
        .json({ message: "Bad request, Please provide fields or query" });
    }

    if (fields && !q) {
      return res.status(200).json(searchDocumentByFields(fields));
    }

    if (!fields && q) {
      return res.status(200).json(searchDocumentsByQuery(q));
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve the documents" });
  }
};

module.exports = {
  getDocumentsByFieldsOrQuery,
  getDocumentById,
  getDocumentsByQuery,
};
