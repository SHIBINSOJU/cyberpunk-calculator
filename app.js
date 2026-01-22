const express = require("express");
const app = express();

/* Middleware to read form data */
app.use(express.urlencoded({ extended: true }));

/* Allow CSS & JS files */
app.use(express.static("public"));

/* Set EJS */
app.set("view engine", "ejs");

/* Home page */
app.get("/", (req, res) => {
  res.render("index", { result: "0" });
});

/* Calculate route */
app.post("/calculate", (req, res) => {
  const expression = req.body.expression;
  let result;

  try {
    result = eval(expression);
  } catch (err) {
    result = "Error";
  }

  res.render("index", { result });
});

/* Start server */
app.listen(3000, () => {
  console.log("Cyberpunk Calculator running on port 3000");
});
