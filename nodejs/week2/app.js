const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const documentRoute = require("./routes/documentRoute");

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.use("/documents", documentRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
