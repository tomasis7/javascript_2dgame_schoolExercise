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
  image1.width = 100;
  image1.height = 100;
  image1.onclick = () => loadRoom0Scene(container);

  const image2 = document.createElement("img");
  image2.src = "images/skeletonhand.gif";
  image2.width = 100;

  const text1 = document.createElement("p");
  text1.textContent = "Submit your soul to play";
  text1.className = "large green";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your name";
  input.className = "large green";

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "column";

  container.append(text, image1, image2, text1, input);
}

function loadRoom0Scene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.width = 100;
  image3.onclick = () => loadStartScene(container);

  const image4 = document.createElement("img");
  image4.src = "images/room0.gif";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.width = 100;
  image5.onclick = () => loadRoom1Scene(container);

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  container.append(image3, image4, image5);
}
function loadRoom1Scene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.width = 100;
  image3.onclick = () => loadRoom0Scene(container);

  const image6 = document.createElement("img");
  image6.src = "images/room1.gif";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.width = 100;
  image5.onclick = () => loadRoom2Scene(container);

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  container.append(image3, image6, image5);
}
function loadRoom2Scene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.width = 100;
  image3.onclick = () => loadRoom1Scene(container);

  const image7 = document.createElement("img");
  image7.src = "images/room2.gif";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.width = 100;
  image5.onclick = () => loadRoom3Scene(container);

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  container.append(image3, image7, image5);
}
function loadRoom3Scene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.width = 100;
  image3.onclick = () => loadRoom2Scene(container);

  const image8 = document.createElement("img");
  image8.src = "images/room3.gif";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.width = 100;
  image5.onclick = () => loadRoom4Scene(container);

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  container.append(image3, image7, image5);
}
