function setupContainer(container, flexDirection = "column") {
  container.innerHTML = "";
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = flexDirection;
}

function appendElements(container, elements) {
  elements.forEach((element) => container.appendChild(element));
}

function createImage(src, width, onclick) {
  const img = document.createElement("img");
  img.src = src;
  if (width) img.width = width;
  if (onclick) img.onclick = onclick;
  return img;
}

function loadStartScene(container) {
  setupContainer(container);

  const text = document.createElement("h1");
  text.textContent = "Welcome to the game";
  text.className = "large green";

  const image1 = createImage("images/playbutton.gif", 100, () =>
    loadRoom0Scene(container),
  );
  const image2 = createImage("images/skeletonhand.gif", 100);

  const text1 = document.createElement("p");
  text1.textContent = "Submit your soul to play";
  text1.className = "large green";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your name";
  input.className = "large green";

  appendElements(container, [text, image1, image2, text1, input]);
}

function loadRoomScene(container, roomNumber) {
  setupContainer(container, "row");

  const images = [
    {
      src: "images/leftarrowbutton.gif",
      width: 100,
      onclick: () => loadRoomScene(container, roomNumber - 1),
    },
    { src: `images/room${roomNumber}.gif` },
    {
      src: "images/rightarrowbutton.gif",
      width: 100,
      onclick: () => loadRoomScene(container, roomNumber + 1),
    },
  ];

  images.forEach((imageData) => {
    const img = createImage(imageData.src, imageData.width, imageData.onclick);
    container.appendChild(img);
  });
}

function loadRoom0Scene(container) {
  loadRoomScene(container, 0);
}

function loadRoom1Scene(container) {
  loadRoomScene(container, 1);
}

function loadRoom2Scene(container) {
  loadRoomScene(container, 2);
}

function loadRoom3Scene(container) {
  loadRoomScene(container, 3);
}
