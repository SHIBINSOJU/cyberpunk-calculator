let expression = "";

function press(value) {
  expression += value;
  document.getElementById("screen").innerText = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("screen").innerText = "0";
}

function calculate() {
  document.getElementById("expr").value = expression;
  document.getElementById("calcForm").submit();
}

function deleteLast() {
  expression = expression.slice(0, -1);

  if (expression === "") {
    document.getElementById("screen").innerText = "0";
  } else {
    document.getElementById("screen").innerText = expression;
  }
}
