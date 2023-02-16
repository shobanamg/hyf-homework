const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts");

  const sortBy = [
    "id",
    "id asc",
    "id desc",
    "first_name",
    "first_name asc",
    "first_name desc",
    "last_name",
    "last_name asc",
    "last_name desc",
    "email",
    "email asc",
    "email desc",
    "phone",
    "phone asc",
    "phone desc",
  ];

  if ("sort" in req.query) {
    const queryParams = req.query.sort.split(",");
    const isValidParams = queryParams.every((el) =>
      //regular expression to remove extra whitespaces
      sortBy.includes(el.toLowerCase().replace(/\s+/g, " ").trim())
    );
    const orderBy = req.query.sort.toString();
    if (isValidParams && orderBy.length > 0) {
      query = query.orderByRaw(orderBy);
    } else {
      return res.status(400).json({ error: "Invalid sort parameter" });
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
