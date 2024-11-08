window.addEventListener("DOMContentLoaded", main);

function main() {
  const container = document.getElementById("container");
  loadStartScene(container);
}

function loadStartScene(container) {
  container.innerHTML = "";

  const text = document.createElement("h1");
  text.textContent = "Welcome to the game";
  text.className = "large green";

  const image1 = document.createElement("img");
  image1.src = "images/playbutton.gif";
  image1.onclick = () => loadRoom0Scene(container);

  const image2 = document.createElement("img");
  image2.src = "images/skeletonhand.gif";

  container.append(text, image1, image2);
}

function loadRoom0Scene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/room0.gif";

  const image4 = document.createElement("img");
  image4.src = "images/rightarrowbutton.gif";

  container.append(image3, image4);
}
