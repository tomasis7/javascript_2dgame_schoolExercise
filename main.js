window.addEventListener("DOMContentLoaded", main);

function main() {
  loadStartScene();
}

function loadStartScene() {
  container.innerHTML = "";

  const text = document.createElement("p");
  text.textContent = ".......";
  text.className = "large green";

  const button = document.createElement("button");
  button.textContent = "Börja!";
  button.onclick = loadKitchenScene;

  container.append(text, button);
}

function loadKitchenScene() {
  container.innerHTML = "";

  const image1 = document.createElement("img");
  image1.src = "images/kitchen.gif";

  const image2 = document.createElement("img");
  image2.src = "images/kitchen2.gif";

  container.append(image1, image2);
}
