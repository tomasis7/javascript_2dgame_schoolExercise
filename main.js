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

  const images = [
    {
      src: "images/leftarrowbutton.gif",
      width: 100,
      onclick: () => loadStartScene(container),
    },
    { src: "images/room0.gif" },
    {
      src: "images/rightarrowbutton.gif",
      width: 100,
      onclick: () => loadRoom1Scene(container),
    },
  ];

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  images.forEach((imageData) => {
    const img = document.createElement("img");
    img.src = imageData.src;
    if (imageData.width) img.width = imageData.width;
    if (imageData.onclick) img.onclick = imageData.onclick;
    container.appendChild(img);
  });
}

function loadRoom1Scene(container) {
  container.innerHTML = "";

  const images = [
    {
      src: "images/leftarrowbutton.gif",
      width: 100,
      onclick: () => loadRoom0Scene(container),
    },
    { src: "images/room1.gif" },
    {
      src: "images/rightarrowbutton.gif",
      width: 100,
      onclick: () => loadRoom2Scene(container),
    },
  ];

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  images.forEach((imageData) => {
    const img = document.createElement("img");
    img.src = imageData.src;
    if (imageData.width) img.width = imageData.width;
    if (imageData.onclick) img.onclick = imageData.onclick;
    container.appendChild(img);
  });
}

function loadRoom2Scene(container) {
  container.innerHTML = "";

  const images = [
    {
      src: "images/leftarrowbutton.gif",
      width: 100,
      onclick: () => loadRoom1Scene(container),
    },
    { src: "images/room2.gif" },
    {
      src: "images/rightarrowbutton.gif",
      width: 100,
      onclick: () => loadRoom3Scene(container),
    },
  ];

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  images.forEach((imageData) => {
    const img = document.createElement("img");
    img.src = imageData.src;
    if (imageData.width) img.width = imageData.width;
    if (imageData.onclick) img.onclick = imageData.onclick;
    container.appendChild(img);
  });
}

function loadRoom3Scene(container) {
  container.innerHTML = "";

  const images = [
    {
      src: "images/leftarrowbutton.gif",
      width: 100,
      onclick: () => loadRoom2Scene(container),
    },
    { src: "images/room3.gif" },
    { src: "images/rightarrowbutton.gif", width: 100 },
  ];

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  images.forEach((imageData) => {
    const img = document.createElement("img");
    img.src = imageData.src;
    if (imageData.width) img.width = imageData.width;
    if (imageData.onclick) img.onclick = imageData.onclick;
    container.appendChild(img);
  });
}
