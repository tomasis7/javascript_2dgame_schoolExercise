window.addEventListener("DOMContentLoaded", main);

let key1Found = false;

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

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";
  imageContainer.style.flexDirection = "row";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.onclick = () => loadStartScene(container);

  const image4div = document.createElement("div");
  image4div.style.position = "relative";

  const roomImage0 = document.createElement("img");
  roomImage0.src = "images/room0.gif";
  roomImage0.style.width = "100%";
  roomImage0.style.height = "100%";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.onclick = () => loadRoom1Scene(container);

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (key1Found) {
    keyimg1.style.top = "1%";
    keyimg1.style.left = "1%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
  } else {
    keyimg1.style.top = "72%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0.5";
    keyimg1.onclick = () => foundKey1(container);
  }
  keyimg1.style.width = "3%";
  keyimg1.style.height = "3%";
  // keyimg1.style.top = "72%";
  // keyimg1.style.left = "15%";
  // // keyimg1.style.transform = "translate(-50%, -50%)";
  // keyimg1.style.opacity = "0.5";
  // keyimg1.style.width = "3%";
  // keyimg1.style.height = "3%";
  // keyimg1.onclick = () => foundKey1(container);

  const text = document.createElement("h1");
  text.textContent =
    "You are trapped. Find the keys to escape. Collect all four keys to unlock the door. Explore this room and the next to locate the keys.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image4div.appendChild(roomImage0);
  image4div.appendChild(keyimg1);
  image4div.appendChild(text);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image4div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);

  // container.style.display = "flex";
  // container.style.justifyContent = "center";
  // container.style.alignItems = "center";
  // container.style.flexDirection = "row";
}

function loadRoom1Scene(container) {
  container.innerHTML = "";

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.onclick = () => loadRoom0Scene(container);

  const image6div = document.createElement("div");
  image6div.style.position = "relative";

  const roomImage1 = document.createElement("img");
  roomImage1.src = "images/room1.gif";
  roomImage1.style.width = "100%";
  roomImage1.style.height = "100%";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.onclick = () => loadRoom2Scene(container);

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.top = "54.5%";
  keyimg2.style.left = "54%";
  keyimg2.style.opacity = "0.5";
  keyimg2.style.width = "3%";
  keyimg2.style.height = "3%";

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image6div.appendChild(roomImage1);
  image6div.appendChild(keyimg2);
  image6div.appendChild(text);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image6div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);

  // container.style.display = "flex";
  // container.style.justifyContent = "center";
  // container.style.alignItems = "center";
  // container.style.flexDirection = "row";
}
function loadRoom2Scene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.onclick = () => loadRoom1Scene(container);

  const image7 = document.createElement("img");
  image7.src = "images/room2.gif";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.onclick = () => loadRoom3Scene(container);

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";
  text.style.width = "580px";

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  container.append(image3, image7, image5, text);
}
function loadRoom3Scene(container) {
  container.innerHTML = "";

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.onclick = () => loadRoom2Scene(container);

  const image8div = document.createElement("div");
  image8div.style.position = "relative";

  const roomImage3 = document.createElement("img");
  roomImage3.src = "images/room3.gif";
  roomImage3.style.width = "100%";
  roomImage3.style.height = "100%";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.onclick = () => loadRoom4Scene(container);

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  keyimg3.style.top = "58%";
  keyimg3.style.left = "85%";
  keyimg3.style.opacity = "0.2";
  keyimg3.style.width = "3%";
  keyimg3.style.height = "3%";

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image8div.appendChild(roomImage3);
  image8div.appendChild(keyimg3);
  image8div.appendChild(text);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image8div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";
}

function loadRoom4Scene(container) {
  container.innerHTML = "";

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.onclick = () => loadRoom3Scene(container);

  const image9div = document.createElement("div");
  image9div.style.position = "relative";

  const roomImage4 = document.createElement("img");
  roomImage4.src = "images/room4.gif";
  roomImage4.style.width = "100%";
  roomImage4.style.height = "100%";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.onclick = () => loadFinalRoomScene(container);

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  keyimg4.style.top = "50%";
  keyimg4.style.left = "50%";
  keyimg4.style.opacity = "0.5";
  keyimg4.style.width = "3%";
  keyimg4.style.height = "3%";

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image9div.appendChild(roomImage4);
  image9div.appendChild(keyimg4);
  image9div.appendChild(text);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image9div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";
}

function loadFinalRoomScene(container) {
  container.innerHTML = "";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.onclick = () => loadRoom4Scene(container);

  const image10 = document.createElement("img");
  image10.src = "images/doorwithfourlocks.gif";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.onclick = () => container;

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "row";

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";
  text.style.width = "580px";

  container.append(image3, image10, image5, text);
}

function foundKey1(container) {
  key1Found = true;
  const keyimg1 = document.querySelector("img[src='images/key1.gif']");
  keyimg1.style.opacity = "1";
  keyimg1.onclick = null;
  keyimg1.style.top = "1%";
  keyimg1.style.left = "1%";
  keyimg1.style.width = "10%";
  keyimg1.style.height = "10%";
  // keyimg1.style.translate = "translate(-50%, -50%)";
}
