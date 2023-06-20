function add(n) {
  return (document.getElementById("display").value += n);
}

function AC() {
  return (document.getElementById("display").value = "");
}

function DEL() {
  /* var display = ; */
  return (document.getElementById("display").value = document
    .getElementById("display")
    .value.slice(0, -1));
}

function calcule() {
  return (document.getElementById("display").value = eval(
    document.getElementById("display").value
  ));
}
