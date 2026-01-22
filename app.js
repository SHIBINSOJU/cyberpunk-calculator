const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

/* MEMORY & HISTORY */
let memory = 0;
let history = [];

/* HOME */
app.get("/", (req, res) => {
  res.render("index", {
    result: "0",
    history,
    memory
  });
});

/* CALCULATE */
app.post("/calculate", (req, res) => {
  const expression = req.body.expression;
  let result;

  try {
    result = eval(expression);
    history.unshift(`${expression} = ${result}`);
    if (history.length > 5) history.pop();
  } catch {
    result = "Error";
  }

  res.render("index", {
    result,
    history,
    memory
  });
});

/* MEMORY ACTIONS */
app.post("/memory", (req, res) => {
  const action = req.body.action;
  const value = Number(req.body.value);

  if (action === "M+") memory += value;
  if (action === "M-") memory -= value;
  if (action === "MC") memory = 0;

  res.render("index", {
    result: value,
    history,
    memory
  });
});

app.listen(3000, () => {
  console.log("Cyberpunk Calculator running");
});
