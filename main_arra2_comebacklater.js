window.addEventListener("DOMContentLoaded", main);

let keysFound = [false, false, false, false];

function main() {
  const container = document.getElementById("container");
  for (let i = 0; i < keysFound.length; i++) {
    const storedKeyFound = localStorage.getItem(`key${i + 1}Found`);
    if (storedKeyFound === "true") {
      keysFound[i] = true;
    }
  }
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
  image1.onclick = () => {
    localStorage.clear();
    keysFound = [false, false, false, false];
    loadRoom0Scene(container);
  };

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

  const startButton = document.createElement("button");
  startButton.textContent = "Start Game";
  startButton.className = "large green";
  startButton.onclick = () => {
    if (input.value.trim() === "") {
      alert("Please enter your name to start the game.");
    } else {
      localStorage.clear();
      keysFound = [false, false, false, false];
      loadRoom0Scene(container);
    }
  };

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "column";

  container.append(text, image1, image2, text1, input, startButton);
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
  image3.style.zIndex = "1";
  image3.onclick = () => loadStartScene(container);

  const image4div = document.createElement("div");
  image4div.style.position = "relative";

  const roomImage0 = document.createElement("img");
  roomImage0.src = "images/room0.gif";
  roomImage0.style.width = "100%";
  roomImage0.style.height = "100%";
  roomImage0.style.zIndex = "0";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.style.zIndex = "1";
  image5.onclick = function () {
    loadRoom1Scene(container);
  };

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (keysFound[0]) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0.3";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKeyFound(0, container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  if (keysFound[1]) {
    keyimg2.style.opacity = "1";
    keyimg2.onclick = null;
    keyimg2.style.top = "4%";
    keyimg2.style.left = "10%";
    keyimg2.style.width = "10%";
    keyimg2.style.height = "10%";
    keyimg2.style.transform = "translate(-50%, -50%)";
    keyimg2.style.zIndex = "0";
  } else {
    keyimg2.style.top = "54.5%";
    keyimg2.style.left = "54%";
    keyimg2.style.opacity = "0";
    keyimg2.style.width = "3%";
    keyimg2.style.height = "3%";
    keyimg2.onclick = () => handleKeyFound(1, keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (keysFound[2]) {
    keyimg3.style.opacity = "1";
    keyimg3.onclick = null;
    keyimg3.style.top = "4%";
    keyimg3.style.left = "20%";
    keyimg3.style.width = "10%";
    keyimg3.style.height = "10%";
    keyimg3.style.transform = "translate(-50%, -50%)";
    keyimg3.style.zIndex = "0";
  } else {
    keyimg3.style.top = "58%";
    keyimg3.style.left = "85%";
    keyimg3.style.opacity = "0.2";
    keyimg3.style.width = "3%";
    keyimg3.style.height = "3%";
    keyimg3.onclick = () => handleKeyFound(2, keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (keysFound[3]) {
    keyimg4.style.opacity = "1";
    keyimg4.onclick = null;
    keyimg4.style.top = "4%";
    keyimg4.style.left = "30%";
    keyimg4.style.width = "10%";
    keyimg4.style.height = "10%";
    keyimg4.style.transform = "translate(-50%, -50%)";
    keyimg4.style.zIndex = "1";
  } else {
    keyimg4.style.top = "50%";
    keyimg4.style.left = "50%";
    keyimg4.style.opacity = "0";
    keyimg4.style.width = "3%";
    keyimg4.style.height = "3%";
    keyimg4.onclick = () => handleKeyFound(3, keyimg4);
  }

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
  image4div.appendChild(keyimg2);
  image4div.appendChild(keyimg3);
  image4div.appendChild(keyimg4);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image4div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);
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
  image3.style.zIndex = "1";
  image3.onclick = () => loadRoom0Scene(container);

  const image6div = document.createElement("div");
  image6div.style.position = "relative";

  const roomImage1 = document.createElement("img");
  roomImage1.src = "images/room1.gif";
  roomImage1.style.width = "100%";
  roomImage1.style.height = "100%";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.style.zIndex = "1";
  image5.onclick = function () {
    loadRoom2Scene(container);
  };

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.zIndex = "1";

  if (keysFound[1]) {
    keyimg2.style.opacity = "1";
    keyimg2.onclick = null;
    keyimg2.style.top = "4%";
    keyimg2.style.left = "10%";
    keyimg2.style.width = "10%";
    keyimg2.style.height = "10%";
    keyimg2.style.transform = "translate(-50%, -50%)";
    keyimg2.style.zIndex = "0";
  } else {
    keyimg2.style.top = "54.5%";
    keyimg2.style.left = "54%";
    keyimg2.style.opacity = "0.5";
    keyimg2.style.width = "3%";
    keyimg2.style.height = "3%";
    keyimg2.onclick = () => handleKeyFound(1, keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (keysFound[0]) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0.3";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKeyFound(0, container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (keysFound[2]) {
    keyimg3.style.opacity = "1";
    keyimg3.onclick = null;
    keyimg3.style.top = "4%";
    keyimg3.style.left = "20%";
    keyimg3.style.width = "10%";
    keyimg3.style.height = "10%";
    keyimg3.style.transform = "translate(-50%, -50%)";
    keyimg3.style.zIndex = "0";
  } else {
    keyimg3.style.top = "58%";
    keyimg3.style.left = "85%";
    keyimg3.style.opacity = "0.2";
    keyimg3.style.width = "3%";
    keyimg3.style.height = "3%";
    keyimg3.onclick = () => handleKeyFound(2, keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (keysFound[3]) {
    keyimg4.style.opacity = "1";
    keyimg4.onclick = null;
    keyimg4.style.top = "4%";
    keyimg4.style.left = "30%";
    keyimg4.style.width = "10%";
    keyimg4.style.height = "10%";
    keyimg4.style.transform = "translate(-50%, -50%)";
    keyimg4.style.zIndex = "1";
  } else {
    keyimg4.style.top = "50%";
    keyimg4.style.left = "50%";
    keyimg4.style.opacity = "0";
    keyimg4.style.width = "3%";
    keyimg4.style.height = "3%";
    keyimg4.onclick = () => handleKeyFound(3, keyimg4);
  }

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
  image6div.appendChild(keyimg1);
  image6div.appendChild(keyimg3);
  image6div.appendChild(keyimg4);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image6div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);
}
function loadRoom2Scene(container) {
  container.innerHTML = "";

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";
  imageContainer.style.flexDirection = "row";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.style.zIndex = "1";
  image3.onclick = () => loadRoom1Scene(container);

  const image4div = document.createElement("div");
  image4div.style.position = "relative";

  const image7 = document.createElement("img");
  image7.src = "images/room2.gif";
  image7.style.width = "100%";
  image7.style.height = "100%";
  image7.style.zIndex = "0";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image3.style.zIndex = "1";
  image5.onclick = function () {
    loadRoom3Scene(container);
  };

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  keyimg1.style.zIndex = "1";
  if (keysFound[0]) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKeyFound(0, container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  if (keysFound[1]) {
    keyimg2.style.opacity = "1";
    keyimg2.onclick = null;
    keyimg2.style.top = "4%";
    keyimg2.style.left = "10%";
    keyimg2.style.width = "10%";
    keyimg2.style.height = "10%";
    keyimg2.style.transform = "translate(-50%, -50%)";
    keyimg2.style.zIndex = "0";
  } else {
    keyimg2.style.top = "54.5%";
    keyimg2.style.left = "54%";
    keyimg2.style.opacity = "0";
    keyimg2.style.width = "3%";
    keyimg2.style.height = "3%";
    keyimg2.onclick = () => handleKeyFound(1, keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (keysFound[2]) {
    keyimg3.style.opacity = "1";
    keyimg3.onclick = null;
    keyimg3.style.top = "4%";
    keyimg3.style.left = "20%";
    keyimg3.style.width = "10%";
    keyimg3.style.height = "10%";
    keyimg3.style.transform = "translate(-50%, -50%)";
    keyimg3.style.zIndex = "0";
  } else {
    keyimg3.style.top = "58%";
    keyimg3.style.left = "85%";
    keyimg3.style.opacity = "0";
    keyimg3.style.width = "3%";
    keyimg3.style.height = "3%";
    keyimg3.onclick = () => handleKeyFound(2, keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (keysFound[3]) {
    keyimg4.style.opacity = "1";
    keyimg4.onclick = null;
    keyimg4.style.top = "4%";
    keyimg4.style.left = "30%";
    keyimg4.style.width = "10%";
    keyimg4.style.height = "10%";
    keyimg4.style.transform = "translate(-50%, -50%)";
    keyimg4.style.zIndex = "1";
  } else {
    keyimg4.style.top = "50%";
    keyimg4.style.left = "50%";
    keyimg4.style.opacity = "0";
    keyimg4.style.width = "3%";
    keyimg4.style.height = "3%";
    keyimg4.onclick = () => handleKeyFound(3, keyimg4);
  }

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image4div.appendChild(image7);
  image4div.appendChild(keyimg1);
  image4div.appendChild(text);
  image4div.appendChild(keyimg2);
  image4div.appendChild(keyimg3);
  image4div.appendChild(keyimg4);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image4div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);
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
  image3.style.zIndex = "1";
  image3.onclick = () => loadRoom2Scene(container);

  const image8div = document.createElement("div");
  image8div.style.position = "relative";

  const roomImage3 = document.createElement("img");
  roomImage3.src = "images/room3.gif";
  roomImage3.style.zIndex = "0";

  roomImage3.style.width = "100%";
  roomImage3.style.height = "100%";

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.style.zIndex = "1";
  image5.onclick = function () {
    loadRoom4Scene(container);
  };

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (keysFound[2]) {
    keyimg3.style.opacity = "1";
    keyimg3.onclick = null;
    keyimg3.style.top = "4%";
    keyimg3.style.left = "20%";
    keyimg3.style.width = "10%";
    keyimg3.style.height = "10%";
    keyimg3.style.transform = "translate(-50%, -50%)";
    keyimg3.style.zIndex = "0";
  } else {
    keyimg3.style.top = "58%";
    keyimg3.style.left = "85%";
    keyimg3.style.opacity = "0.2";
    keyimg3.style.width = "3%";
    keyimg3.style.height = "3%";
    keyimg3.onclick = () => handleKeyFound(2, keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (keysFound[0]) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKeyFound(0, container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.zIndex = "1";

  if (keysFound[1]) {
    keyimg2.style.opacity = "1";
    keyimg2.onclick = null;
    keyimg2.style.top = "4%";
    keyimg2.style.left = "10%";
    keyimg2.style.width = "10%";
    keyimg2.style.height = "10%";
    keyimg2.style.transform = "translate(-50%, -50%)";
    keyimg2.style.zIndex = "0";
  } else {
    keyimg2.style.top = "54.5%";
    keyimg2.style.left = "54%";
    keyimg2.style.opacity = "0";
    keyimg2.style.width = "3%";
    keyimg2.style.height = "3%";
    keyimg2.onclick = () => handleKeyFound(1, keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (keysFound[3]) {
    keyimg4.style.opacity = "1";
    keyimg4.onclick = null;
    keyimg4.style.top = "4%";
    keyimg4.style.left = "30%";
    keyimg4.style.width = "10%";
    keyimg4.style.height = "10%";
    keyimg4.style.transform = "translate(-50%, -50%)";
    keyimg4.style.zIndex = "1";
  } else {
    keyimg4.style.top = "50%";
    keyimg4.style.left = "50%";
    keyimg4.style.opacity = "0";
    keyimg4.style.width = "3%";
    keyimg4.style.height = "3%";
    keyimg4.onclick = () => handleKeyFound(3, keyimg4);
  }

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
  image8div.appendChild(keyimg1);
  image8div.appendChild(keyimg2);
  image8div.appendChild(keyimg4);

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
  image5.onclick = function () {
    loadFinalRoomScene(container);
  };

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (keysFound[3]) {
    keyimg4.style.opacity = "1";
    keyimg4.onclick = null;
    keyimg4.style.top = "4%";
    keyimg4.style.left = "30%";
    keyimg4.style.width = "10%";
    keyimg4.style.height = "10%";
    keyimg4.style.transform = "translate(-50%, -50%)";
    keyimg4.style.zIndex = "1";
  } else {
    keyimg4.style.top = "50%";
    keyimg4.style.left = "50%";
    keyimg4.style.opacity = "0.5";
    keyimg4.style.width = "3%";
    keyimg4.style.height = "3%";
    keyimg4.onclick = () => handleKeyFound(3, keyimg4);
  }

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (keysFound[0]) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKeyFound(0, container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.zIndex = "1";

  if (keysFound[1]) {
    keyimg2.style.opacity = "1";
    keyimg2.onclick = null;
    keyimg2.style.top = "4%";
    keyimg2.style.left = "10%";
    keyimg2.style.width = "10%";
    keyimg2.style.height = "10%";
    keyimg2.style.transform = "translate(-50%, -50%)";
    keyimg2.style.zIndex = "0";
  } else {
    keyimg2.style.top = "54.5%";
    keyimg2.style.left = "54%";
    keyimg2.style.opacity = "0";
    keyimg2.style.width = "3%";
    keyimg2.style.height = "3%";
    keyimg2.onclick = () => handleKeyFound(1, keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (keysFound[2]) {
    keyimg3.style.opacity = "1";
    keyimg3.onclick = null;
    keyimg3.style.top = "4%";
    keyimg3.style.left = "20%";
    keyimg3.style.width = "10%";
    keyimg3.style.height = "10%";
    keyimg3.style.transform = "translate(-50%, -50%)";
    keyimg3.style.zIndex = "0";
  } else {
    keyimg3.style.top = "58%";
    keyimg3.style.left = "85%";
    keyimg3.style.opacity = "0";
    keyimg3.style.width = "3%";
    keyimg3.style.height = "3%";
    keyimg3.onclick = () => handleKeyFound(2, keyimg3);
    keyimg3.style.zIndex = "1";
  }

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
  image9div.appendChild(keyimg1);
  image9div.appendChild(keyimg2);
  image9div.appendChild(keyimg3);

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

  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.display = "flex";
  imageContainer.style.justifyContent = "center";
  imageContainer.style.alignItems = "center";
  imageContainer.style.flexDirection = "row";

  const image3 = document.createElement("img");
  image3.src = "images/leftarrowbutton.gif";
  image3.style.zIndex = "1";
  image3.onclick = () => loadRoom4Scene(container);

  const image4div = document.createElement("div");
  image4div.style.position = "relative";

  const image10 = document.createElement("img");
  image10.src = "images/doorwithfourlocks.gif";
  image10.style.width = "100%";
  image10.style.height = "100%";
  image10.style.zIndex = "0";
  image10.onclick = () => loadFinalDoor(container);

  const image5 = document.createElement("img");
  image5.src = "images/rightarrowbutton.gif";
  image5.style.zIndex = "1";

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  keyimg1.style.zIndex = "1";
  if (keysFound[0]) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "0";
  } else {
    keyimg1.style.top = "74%";
    keyimg1.style.left = "15%";
    keyimg1.style.opacity = "0";
    keyimg1.style.width = "3%";
    keyimg1.style.height = "3%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.onclick = () => handleKeyFound(0, container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  if (keysFound[1]) {
    keyimg2.style.opacity = "1";
    keyimg2.onclick = null;
    keyimg2.style.top = "4%";
    keyimg2.style.left = "10%";
    keyimg2.style.width = "10%";
    keyimg2.style.height = "10%";
    keyimg2.style.transform = "translate(-50%, -50%)";
    keyimg2.style.zIndex = "0";
  } else {
    keyimg2.style.top = "54.5%";
    keyimg2.style.left = "54%";
    keyimg2.style.opacity = "0";
    keyimg2.style.width = "3%";
    keyimg2.style.height = "3%";
    keyimg2.onclick = () => handleKeyFound(1, keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (keysFound[2]) {
    keyimg3.style.opacity = "1";
    keyimg3.onclick = null;
    keyimg3.style.top = "4%";
    keyimg3.style.left = "20%";
    keyimg3.style.width = "10%";
    keyimg3.style.height = "10%";
    keyimg3.style.transform = "translate(-50%, -50%)";
    keyimg3.style.zIndex = "0";
  } else {
    keyimg3.style.top = "58%";
    keyimg3.style.left = "85%";
    keyimg3.style.opacity = "0";
    keyimg3.style.width = "3%";
    keyimg3.style.height = "3%";
    keyimg3.onclick = () => handleKeyFound(2, keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (keysFound[3]) {
    keyimg4.style.opacity = "1";
    keyimg4.onclick = null;
    keyimg4.style.top = "4%";
    keyimg4.style.left = "30%";
    keyimg4.style.width = "10%";
    keyimg4.style.height = "10%";
    keyimg4.style.transform = "translate(-50%, -50%)";
    keyimg4.style.zIndex = "1";
  } else {
    keyimg4.style.top = "50%";
    keyimg4.style.left = "50%";
    keyimg4.style.opacity = "0";
    keyimg4.style.width = "3%";
    keyimg4.style.height = "3%";
    keyimg4.onclick = () => handleKeyFound(3, keyimg4);
  }

  const text = document.createElement("h1");
  text.textContent =
    "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.";
  text.className = "large green";
  text.style.position = "absolute";
  text.style.top = "99%";
  text.style.left = "1%";
  text.style.transform = "translateX(-50%, -50%)";
  text.style.direction = "ltr";

  image4div.appendChild(image10);
  image4div.appendChild(keyimg1);
  image4div.appendChild(text);
  image4div.appendChild(keyimg2);
  image4div.appendChild(keyimg3);
  image4div.appendChild(keyimg4);

  imageContainer.appendChild(image3);
  imageContainer.appendChild(image4div);
  imageContainer.appendChild(image5);

  container.appendChild(imageContainer);
}

function handleKeyFound(index, keyimg) {
  keysFound[index] = true;
  localStorage.setItem(`key${index + 1}Found`, "true");
  keyimg.style.opacity = "1";
  keyimg.onclick = null;
  keyimg.style.top = "4%";
  keyimg.style.left = `${index * 10 + 2}%`;
  keyimg.style.width = "10%";
  keyimg.style.height = "10%";
  keyimg.style.transform = "translate(-50%, -50%)";
  keyimg.style.zIndex = "2";
}

function loadFinalDoor(container) {
  const allKeysFound = keysFound.every((key) => key);
  if (allKeysFound) {
    alert(
      "You have found all four keys. Congratulations! You have unlocked the door and escaped the room.",
    );
    localStorage.clear();
    loadFinalRoom(container);
  } else {
    alert(
      "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door.",
    );
  }
}

function loadFinalRoom(container) {
  container.innerHTML = "";

  const text = document.createElement("h1");
  text.textContent = "Congratulations! You have escaped the room.";
  text.className = "large green";

  const finalRoomImage = document.createElement("img");
  finalRoomImage.src = "images/finaldoor.gif";
  finalRoomImage.style.width = "100%";
  finalRoomImage.style.height = "100%";

  container.append(text, finalRoomImage);
}
