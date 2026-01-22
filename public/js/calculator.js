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
