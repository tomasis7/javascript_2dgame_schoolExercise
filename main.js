window.addEventListener("DOMContentLoaded", main());

function main() {
  addEventlisteners();
}

function addEventlisteners() {
  document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
  });
}
