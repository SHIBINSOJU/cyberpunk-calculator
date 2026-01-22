let expression = "";

/* PRESS NUMBER / OPERATOR */
function press(value) {
  const lastChar = expression.slice(-1);

  // Prevent operator spam like +++ or **
  if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
    return;
  }

  expression += value;

  // Update preview and main screen
  document.getElementById("expression-preview").innerText = expression;
  document.getElementById("screen").innerText = expression;
}

/* CLEAR ALL */
function clearScreen() {
  expression = "";
  document.getElementById("expression-preview").innerText = "";
  document.getElementById("screen").innerText = "0";
}

/* DELETE LAST CHARACTER */
function deleteLast() {
  expression = expression.slice(0, -1);

  document.getElementById("expression-preview").innerText = expression;

  if (expression === "") {
    document.getElementById("screen").innerText = "0";
  } else {
    document.getElementById("screen").innerText = expression;
  }
}

/* CALCULATE (SEND TO BACKEND) */
function calculate() {
  document.getElementById("expr").value = expression;
  document.getElementById("calcForm").submit();
}
