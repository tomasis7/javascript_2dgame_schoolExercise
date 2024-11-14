/**
 * Main function to initialize the game.
 * Loads the start scene and retrieves the state of found keys from localStorage.
 */
function main() {}

/**
 * Loads the start scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadStartScene(container) {}

/**
 * Loads the first room scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadRoom0Scene(container) {}

/**
 * Loads the second room scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadRoom1Scene(container) {}

/**
 * Loads the third room scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadRoom2Scene(container) {}

/**
 * Loads the fourth room scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadRoom3Scene(container) {}

/**
 * Loads the fifth room scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadRoom4Scene(container) {}

/**
 * Loads the final room scene of the game.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadFinalRoomScene(container) {}

/**
 * Handles the event when the first key is found.
 * Updates the state and localStorage, and modifies the key image.
 * @param {HTMLElement} container - The container element to update the key image in.
 */
function handleKey1Found(container) {}

/**
 * Handles the event when the second key is found.
 * Updates the state and localStorage, and modifies the key image.
 * @param {HTMLImageElement} keyimg2 - The image element of the second key.
 */
function handleKey2Found(keyimg2) {}

/**
 * Handles the event when the third key is found.
 * Updates the state and localStorage, and modifies the key image.
 * @param {HTMLImageElement} keyimg3 - The image element of the third key.
 */
function handleKey3Found(keyimg3) {}

/**
 * Handles the event when the fourth key is found.
 * Updates the state and localStorage, and modifies the key image.
 */
function handleKey4Found() {}

/**
 * Loads the final door scene and checks if all keys are found.
 * If all keys are found, displays a success message and loads the final room.
 * Otherwise, displays a message to keep exploring.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadFinalDoor(container) {}

/**
 * Loads the final room scene after the player has escaped.
 * @param {HTMLElement} container - The container element to load the scene into.
 */
function loadFinalRoom(container) {}

/**
 * Displays the popup by setting its display style to "flex".
 */
function openPopup() {}

/**
 * Hides the popup by setting its display style to "none".
 */
function closePopup() {}

/**
 * Displays the popup by setting its display style to "flex".
 */
function openPopup() {}

/**
 * Hides the popup by setting its display style to "none".
 */
function closePopup() {}

/////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", main);

// Variables to store the state of found keys
let key1Found = false;
let key2Found = false;
let key3Found = false;
let key4Found = false;

// Array to store room image filenames
const roomImages = [
  "images/room0.gif",
  "images/room1.gif",
  "images/room2.gif",
  "images/room3.gif",
  "images/room4.gif",
];

// Function to initialize the game
function main() {
  const container = document.getElementById("container");
  const storedKey1Found = localStorage.getItem("key1Found");
  if (storedKey1Found === "true") {
    key4Found = true;
  }
  const storedKey2Found = localStorage.getItem("key2Found");
  if (storedKey2Found === "true") {
    key2Found = true;
  }
  const storedKey3Found = localStorage.getItem("key3Found");
  if (storedKey3Found === "true") {
    key3Found = true;
  }
  const storedKey4Found = localStorage.getItem("key4Found");
  if (storedKey4Found === "true") {
    key4Found = true;
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
    if (input.value.trim() === "") {
      openPopup();
    } else {
      localStorage.clear();
      key1Found = false;
      key2Found = false;
      key3Found = false;
      key4Found = false;
      loadRoom0Scene(container);
    }
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
  image3.style.zIndex = "1";
  image3.onclick = () => loadStartScene(container);

  const image4div = document.createElement("div");
  image4div.style.position = "relative";

  const roomImage0 = document.createElement("img");
  roomImage0.src = roomImages[0];
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
  keyimg1.style.zIndex = "1";
  if (key1Found) {
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
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  if (key2Found) {
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
    keyimg2.onclick = () => handleKey2Found(keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (key3Found) {
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
    keyimg3.onclick = () => handleKey3Found(keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (key4Found) {
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
    keyimg4.onclick = () => handleKey4Found(keyimg4);
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
  roomImage1.src = roomImages[1];
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

  if (key2Found) {
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
    keyimg2.onclick = () => handleKey2Found(keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (key1Found) {
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
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (key3Found) {
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
    keyimg3.onclick = () => handleKey3Found(keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (key4Found) {
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
    keyimg4.onclick = () => handleKey4Found(keyimg4);
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

  const roomImage2 = document.createElement("img");
  roomImage2.src = roomImages[2];
  roomImage2.style.width = "100%";
  roomImage2.style.height = "100%";
  roomImage2.style.zIndex = "0";

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
  if (key1Found) {
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
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  if (key2Found) {
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
    keyimg2.onclick = () => handleKey2Found(keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (key3Found) {
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
    keyimg3.onclick = () => handleKey3Found(keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (key4Found) {
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
    keyimg4.onclick = () => handleKey4Found(keyimg4);
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

  image4div.appendChild(roomImage2);
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
  roomImage3.src = roomImages[3];
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
  if (key3Found) {
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
    keyimg3.onclick = () => handleKey3Found(keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (key1Found) {
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
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.zIndex = "1";

  if (key2Found) {
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
    keyimg2.onclick = () => handleKey2Found(keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (key4Found) {
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
    keyimg4.onclick = () => handleKey4Found(keyimg4);
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
  roomImage4.src = roomImages[4];
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
  if (key4Found) {
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
    keyimg4.onclick = () => handleKey4Found(keyimg4);
  }

  const keyimg1 = document.createElement("img");
  keyimg1.src = "images/key1.gif";
  keyimg1.style.position = "absolute";
  if (key1Found) {
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
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  keyimg2.style.zIndex = "1";

  if (key2Found) {
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
    keyimg2.onclick = () => handleKey2Found(keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (key3Found) {
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
    keyimg3.onclick = () => handleKey3Found(keyimg3);
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
  if (key1Found) {
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
    keyimg1.onclick = () => handleKey1Found(container);
    keyimg1.style.zIndex = "1";
  }

  const keyimg2 = document.createElement("img");
  keyimg2.src = "images/key2.gif";
  keyimg2.style.position = "absolute";
  if (key2Found) {
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
    keyimg2.onclick = () => handleKey2Found(keyimg2);
    keyimg2.style.zIndex = "1";
  }

  const keyimg3 = document.createElement("img");
  keyimg3.src = "images/key3.gif";
  keyimg3.style.position = "absolute";
  if (key3Found) {
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
    keyimg3.onclick = () => handleKey3Found(keyimg3);
    keyimg3.style.zIndex = "1";
  }

  const keyimg4 = document.createElement("img");
  keyimg4.src = "images/key4.gif";
  keyimg4.style.position = "absolute";
  if (key4Found) {
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
    keyimg4.onclick = () => handleKey4Found(keyimg4);
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

function handleKey1Found(container) {
  key1Found = true;
  localStorage.setItem("key1Found", "true");
  const keyimg1 = document.querySelector("img[src='images/key1.gif']");
  if (keyimg1) {
    keyimg1.style.opacity = "1";
    keyimg1.onclick = null;
    keyimg1.style.top = "4%";
    keyimg1.style.left = "2%";
    keyimg1.style.width = "10%";
    keyimg1.style.height = "10%";
    keyimg1.style.transform = "translate(-50%, -50%)";
    keyimg1.style.zIndex = "1";
  }
}

function handleKey2Found(keyimg2) {
  key2Found = true;
  localStorage.setItem("key2Found", "true");
  keyimg2.style.opacity = "1";
  keyimg2.onclick = null;
  keyimg2.style.top = "4%";
  keyimg2.style.left = "10%";
  keyimg2.style.width = "10%";
  keyimg2.style.height = "10%";
  keyimg2.style.transform = "translate(-50%, -50%)";
  keyimg2.style.zIndex = "1";
}

function handleKey3Found(keyimg3) {
  key3Found = true;
  localStorage.setItem("key3Found", "true");
  keyimg3.style.opacity = "1";
  keyimg3.onclick = null;
  keyimg3.style.top = "4%";
  keyimg3.style.left = "20%";
  keyimg3.style.width = "10%";
  keyimg3.style.height = "10%";
  keyimg3.style.transform = "translate(-50%, -50%)";
  keyimg3.style.zIndex = "1";
}

function handleKey4Found() {
  key4Found = true;
  localStorage.setItem("key4Found", "true");
  const keyimg4 = document.querySelectorAll("img[src='images/key4.gif']");
  keyimg4.forEach((img) => {
    img.style.opacity = "1";
    img.onclick = null;
    img.style.top = "4%";
    img.style.left = "30%";
    img.style.width = "10%";
    img.style.height = "10%";
    img.style.zIndex = "1";
    img.style.transform = "translate(-50%, -50%)";
  });
}

function loadFinalDoor(container) {
  const key1 = localStorage.getItem("key1Found");
  const key2 = localStorage.getItem("key2Found");
  const key3 = localStorage.getItem("key3Found");
  const key4 = localStorage.getItem("key4Found");

  if (
    key1 === "true" &&
    key2 === "true" &&
    key3 === "true" &&
    key4 === "true"
  ) {
    alert(
      "You have found all four keys. Congratulations! You have unlocked the door and escaped the room."
    );
    localStorage.clear();

    loadFinalRoom(container);
  } else {
    alert(
      "You don't have all four keys yet. Keep exploring the rooms to find them all and unlock the door."
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

const popup = document.createElement("div");
popup.id = "popup";
popup.style.display = "none";
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";

const popupContent = document.createElement("div");
popupContent.style.backgroundColor = "#333";
popupContent.style.padding = "20px";
popupContent.style.borderRadius = "5px";
popupContent.style.textAlign = "center";
popupContent.style.position = "relative";

const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.style.position = "absolute";
closeBtn.style.top = "10px";
closeBtn.style.right = "10px";
closeBtn.style.cursor = "pointer";
closeBtn.style.fontSize = "20px";
closeBtn.onclick = closePopup;

const popupText = document.createElement("p");
popupText.innerText = "Please enter your name to start the game.";

popupContent.appendChild(closeBtn);
popupContent.appendChild(popupText);
popup.appendChild(popupContent);
document.body.appendChild(popup);

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

const popup1 = document.createElement("div");
popup1.id = "popup1";
popup1.style.display = "none";
popup1.style.position = "fixed";
popup1.style.top = "0";
popup1.style.left = "0";
popup1.style.width = "100%";
popup1.style.height = "100%";
popup1.style.justifyContent = "center";
popup1.style.alignItems = "center";

const popupContent1 = document.createElement("div");
popupContent1.style.backgroundColor = "#333";
popupContent1.style.padding = "20px";
popupContent1.style.borderRadius = "5px";
popupContent1.style.textAlign = "center";
popupContent1.style.position = "relative";

const closeBtn1 = document.createElement("span");
closeBtn1.innerHTML = "&times;";
closeBtn1.style.position = "absolute";
closeBtn1.style.top = "10px";
closeBtn1.style.right = "10px";
closeBtn1.style.cursor = "pointer";
closeBtn1.style.fontSize = "20px";
closeBtn1.onclick = closePopup;

const popupText1 = document.createElement("p");
popupText1.innerText = "Please enter your name to start the game.";

popupContent1.appendChild(closeBtn1);
popupContent1.appendChild(popupText1);
popup1.appendChild(popupContent1);
document.body.appendChild(popup1);

function openPopup1() {
  popup1.style.display = "flex";
}

function closePopup1() {
  popup1.style.display = "none";
}
